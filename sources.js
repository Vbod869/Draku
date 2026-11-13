/* DRAKU approved playback registry. Only add sources you are authorized to embed/stream.
Example:
window.DRAKU_SOURCES = {
 "TVMAZE_SHOW_ID": {
  "season-1-episode-1": { type:"youtube", videoId:"OFFICIAL_VIDEO_ID",
   subtitles:[{src:"captions/id-episode-1.vtt",srclang:"id",label:"Indonesia",default:true}] }
 }
};
Empty registry means no full episodes have been verified yet. */
window.DRAKU_SOURCES = window.DRAKU_SOURCES || {};
