export const TYPE_IN_ROOM = 'TYPE_IN_ROOM'; // 观众加入房间
export const TYPE_OUT_ROOM = 'TYPE_OUT_ROOM'; // 观众离开房间
export const TYPE_ADD_BLACK = 'TYPE_ADD_BLACK'; // 主持人踢出房间
export const TYPE_ALL_NUMBER = 'TYPE_ALL_NUMBER'; // 直播总人数

export const TYPE_INVITE_MIKE = 'TYPE_INVITE_MIKE'; // 主持人邀请上麦
export const TYPE_AGREE_MIKE = 'TYPE_AGREE_MIKE'; // 观众同意邀请上麦
export const TYPE_REJECT_MIKE = 'TYPE_REJECT_MIKE'; // 观众拒绝邀请上麦
export const TYPE_HOST_END_MIKE = 'TYPE_HOST_END_MIKE'; // 主持人结束连麦
export const PULL_TYPE_HOST_END_MIKE = 'PULL_TYPE_HOST_END_MIKE'; // 嘉宾或观众结束连麦

export const TYPE_APPLICATION_MIKE = 'TYPE_APPLICATION_MIKE'; // 观众申请上麦
export const TYPE_ALLOW_MIKE = 'TYPE_ALLOW_MIKE'; // 主持人允许上麦

export const TYPE_END_LIVE = 'TYPE_END_LIVE'; // 结束直播
export const TYPE_START_LIVE = 'TYPE_START_LIVE'; // 开始直播

export const TYPE_SWITCH_AUDIO = 'TYPE_SWITCH_AUDIO'; // 主持人切换连麦观众音频
export const TYPE_SWITCH_VIDEO = 'TYPE_SWITCH_VIDEO'; // 主持人切换连麦观众视频

export const TYPE_SUCCESS_MIKE = 'TYPE_SUCCESS_MIKE'; // 连麦成功
export const TYPE_FAIL_MIKE = 'TYPE_FAIL_MIKE'; // 连麦失败

export const SET_GUEST_TO_SPEAKER = 'SET_GUEST_TO_SPEAKER'; // 将嘉宾设为主讲人

export const TYPE_DEL_MES = 'TYPE_DEL_MES'; // 删除消息

// status
// 1.下麦状态-初始状态
// 2.举手中
// 3.上麦中

// 允许上麦
export const My_TYPE_DISABLE_ALL_MIKE = 'My_TYPE_DISABLE_ALL_MIKE'; // 禁止所有上麦
export const My_TYPE_PERMIT_ALL_MIKE = 'My_TYPE_PERMIT_ALL_MIKE'; // 允许所有上麦

// 互动
// 远端流添加事件 => 连麦中
// 远端流删除事件 => 下麦状态

// 是否黑名单 =>  客户
// 加入房间 => 客户
// 离开房价 => 客户

// 加入黑名单=> 主持
// 房间成员列表 => 主持
// 更改单个成员状态 => 主持

// ---------
// getAllowMike
