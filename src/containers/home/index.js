import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "@data/posts/PostsActions";
import * as selectors from "@data/posts/PostsSelectors";

import "./index.scss";
import ConvertHtml from "@components/convert-html";
import Loader from "./../../components/loader/index";
import LazyImage from "./../../components/lazy-image/index";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: null,
    };
  }
  componentDidMount() {
    this.props.fetchEntries();
  }
  componentWillUnmount() {
    this.props.reset();
  }
  render() {
    const { entries, isLoading } = this.props;
    console.log(entries);
    return (
      <div className="HomeContainer">
        <Loader visible={isLoading} />
        {entries &&
          entries.map((e) => {
            const { acf } = e;
            return (
              <div key={e.id}>
                <h1>{acf.titulo_do_projeto}</h1>
                {acf.capa && (
                  <LazyImage
                    src={acf.capa.sizes.large}
                    alt={`Luis Bovo designer and developer - project ${acf.titulo_do_projeto}`}
                  />
                )}
                <ConvertHtml html={acf.conteudo} />
                <br />
                <br />
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectors.isLoading(state),
  entries: selectors.entries(state),
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(actions.reset()),
  fetchEntries: () => dispatch(actions.fetchEntries()),
});

HomeContainer.propTypes = {};

HomeContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
