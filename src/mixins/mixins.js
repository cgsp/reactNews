const MixinLog = {
  log() {
    console.log(123456789);
  },
  componentWillMount() {
    console.log('组件即将被加载');
  }
}

export default MixinLog;