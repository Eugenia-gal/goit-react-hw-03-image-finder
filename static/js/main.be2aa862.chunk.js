(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2CkVE",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1SpOg","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__MPnUH"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2beSi",Modal:"Modal_Modal__auIMj"}},26:function(e,t,a){e.exports={Button:"Button_Button__3vesl"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__xH2dE"}},34:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),s=a.n(c),o=(a(34),a(4)),i=a(5),l=a(7),u=a(6),h=a(8),m=a(29),g=a(9),p=a.n(g),d=a(1),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleChange=function(t){e.setState({searchQuery:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):h.b.error("Enter your query please",{position:"top-right",duration:2e3})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:p.a.wrapper,children:Object(d.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{className:p.a.submit_btn,type:"submit",children:Object(d.jsx)(m.a,{className:p.a.icon})}),Object(d.jsx)("input",{className:p.a.search_input,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",type:"text",name:"search",value:this.state.searchQuery,onChange:this.handleChange})]})})}}]),a}(r.Component),f=a(10),j=a.n(f),y=a(15),v=a(12),O=a(25),I=a.n(O),_=a(13),x=a.n(_);var S=function(e){var t=e.src,a=e.tags,r=e.largeImage,n=e.onClick;return Object(d.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:a,className:x.a.ImageGalleryItem_image,onClick:function(){n({largeImage:r,tags:a})}})})},k=a(26),C=a.n(k);var w=function(e){var t=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{type:"button",className:C.a.Button,onClick:t,children:"Load more"})})},G=a(27),M=a.n(G);var N=function(e,t){return M.a.get("https://pixabay.com/api/",{params:{q:e,page:"".concat(t),key:"21801737-49cda37636a05962c9a05323f",image_type:"photo",orientation:"horizontal",per_page:"12"}}).then((function(e){return e.data.hits}))},P=a(28),B=a.n(P),Q="idle",F="pending",E="resolved",T="rejected",q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={currentPage:1,images:[],status:Q,error:null},e.getImages=function(){var t=Object(v.a)(j.a.mark((function t(a,r){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({status:F}),t.prev=1,t.next=4,N(a,r);case 4:if(0!==(n=t.sent).length){t.next=8;break}return e.setState({status:Q}),t.abrupt("return",h.b.error("Search result is not successful. Enter the correct query and try again, please.",{position:"top-right",duration:3e3}));case 8:e.setState((function(e){return{images:[].concat(Object(y.a)(e.images),Object(y.a)(n)),status:E}})),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),e.setState({error:t.t0.message,status:T}),h.b.error("Oops! Something went wrong... Please try again. If the problem persists, contact our customer support",{position:"top-right",duration:3e3});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}(),e.changeCurrentPage=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(v.a)(j.a.mark((function e(t,a){var r,n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.query,n=this.props.query,c=a.currentPage,s=this.state.currentPage,r!==n&&(this.setState({currentPage:1,images:[],error:null}),this.getImages(n,s)),r!==n||c===s||1===s){e.next=10;break}return this.setState({error:null}),e.next=9,this.getImages(n,s);case 9:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,r=e.error,n=this.props.onSelect;return Object(d.jsxs)(d.Fragment,{children:[a===T&&Object(d.jsxs)("h1",{children:["Error: ",r]}),Object(d.jsx)("ul",{className:B.a.ImageGallery,children:t.length>0&&t.map((function(e){return Object(d.jsx)(S,{src:e.webformatURL,tags:e.tags,largeImage:e.largeImageURL,onClick:n},e.id)}))}),a===F&&Object(d.jsx)(I.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100}),a===E&&t.length>0&&Object(d.jsx)(w,{onClick:this.changeCurrentPage})]})}}]),a}(r.Component),L=a(14),U=a.n(L),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).escFunction=function(t){27===t.keyCode&&e.props.onClose()},e.closeModal=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction)}},{key:"render",value:function(){var e=this,t=this.props,a=t.src,r=t.tags;return Object(d.jsx)("div",{className:U.a.Overlay,onClick:function(t){e.closeModal(t)},children:Object(d.jsx)("div",{className:U.a.Modal,children:Object(d.jsx)("img",{src:a,alt:r})})})}}]),a}(r.Component),D=(a(75),a(76),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",selectedImage:null,selectedImageTags:null},e.saveSearchQuery=function(t){e.setState({searchQuery:t})},e.handleSelectImage=function(t){var a=t.largeImage,r=t.tags;e.setState({selectedImage:a,selectedImageTags:r})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.selectedImage,r=e.selectedImageTags;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{onSubmit:this.saveSearchQuery}),Object(d.jsx)(q,{query:t,onSelect:this.handleSelectImage}),a&&Object(d.jsx)(A,{src:a,tags:r,onClose:this.handleCloseModal}),Object(d.jsx)(h.a,{})]})}}]),a}(r.Component)),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),H()},9:function(e,t,a){e.exports={wrapper:"SearchBar_wrapper__znV1k",form:"SearchBar_form__3h4KT",submit_btn:"SearchBar_submit_btn__1qvUV",search_input:"SearchBar_search_input__3pIYI",icon:"SearchBar_icon__33iZ3"}}},[[77,1,2]]]);
//# sourceMappingURL=main.be2aa862.chunk.js.map