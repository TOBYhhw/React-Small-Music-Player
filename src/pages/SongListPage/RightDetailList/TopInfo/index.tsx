import * as React from 'react';
import { connect } from 'react-redux';
import { PlaySquareOutlined } from '@ant-design/icons';
import './index.scss';

import SongListCoverImg from './CoverImg';
import TransparentButton2 from '@/components/transparentButton2';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface TopInfoProps {
  currentDetailListInfo: { [propName: string]: any };
  name: string;
  description: string;
  currentListId: string;
}

interface TopInfoState {}

class TopInfo extends React.Component<TopInfoProps, TopInfoState> {
  state = {};
  render() {
    const _ = this.props.currentDetailListInfo
      ? this.props.currentDetailListInfo
      : {
          id: -1,
          name: '当前播放列表',
        };
    if (typeof this.props.currentListId === 'string') {
    }
    return (
      <TransitionGroup
        className="h30 por"
        childFactory={(child) =>
          React.cloneElement(child, { classNames: 'info' })
        }
      >
        <CSSTransition key={+new Date()} timeout={1200}>
          <div className="top_info">
            <SongListCoverImg
              style={{ backgroundImage: `url(${_.coverImgUrl})` }}
            />
            <div className="operation_box">
              <div className="text">
                <div className="title">{_.name}</div>
                <div className="description">{_.description}</div>
              </div>
              <div className="operation">
                <TransparentButton2 iconBefore={<PlaySquareOutlined />}>
                  播放该播放列表
                </TransparentButton2>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default connect(
  (state: { [propName: string]: any }) => ({
    currentDetailListInfo: state.SongList.currentDetailListInfo,
    name: state.SongList.name,
    description: state.SongList.description,
    currentListId: state.SongList.currentListId,
  }),
  {},
)(TopInfo);