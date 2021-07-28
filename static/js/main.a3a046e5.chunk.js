(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2CkVE",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1SpOg","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__MPnUH"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2beSi",Modal:"Modal_Modal__auIMj"}},24:function(e,t,a){e.exports={Button:"Button_Button__3vesl"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__xH2dE"}},32:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),o=(a(32),a(4)),i=a(5),l=a(7),u=a(6),m=a(8),g=a(27),h=a(9),p=a.n(h),d=a(1),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleChange=function(t){e.setState({searchQuery:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.error("Enter your query please",{position:"top-right",duration:2e3})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:p.a.wrapper,children:Object(d.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{className:p.a.submit_btn,type:"submit",children:Object(d.jsx)(g.a,{className:p.a.icon})}),Object(d.jsx)("input",{className:p.a.search_input,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",type:"text",name:"search",value:this.state.searchQuery,onChange:this.handleChange})]})})}}]),a}(n.Component),j=a(13),f=a(23),y=a.n(f),v=a(11),I=a.n(v);var O=function(e){var t=e.src,a=e.tags,n=e.largeImage,r=e.onClick;return Object(d.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:a,className:I.a.ImageGalleryItem_image,onClick:function(){r({largeImage:n,tags:a})}})})},_=a(24),S=a.n(_);var x=function(e){var t=e.onClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{type:"button",className:S.a.Button,onClick:t,children:"Load more"})})},C=a(25),k=a.n(C);var w=function(e,t){return k.a.get("https://pixabay.com/api/",{params:{q:e,page:"".concat(t),key:"21801737-49cda37636a05962c9a05323f",image_type:"photo",orientation:"horizontal",per_page:"12"}}).then((function(e){return e.data.hits}))},G=a(26),M=a.n(G),N="idle",P="pending",B="resolved",Q="rejected",F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:1,images:[],status:N,error:null},e.getImages=function(t,a){e.setState({status:P}),w(t,a).then((function(t){if(0===t.length)return e.setState({status:N}),m.b.error("Search result is not successful. Enter the correct query and try again, please.",{position:"top-right",duration:3e3});e.setState((function(e){return{images:[].concat(Object(j.a)(e.images),Object(j.a)(t)),status:B}}))})).catch((function(t){e.setState({error:t.message,status:Q}),m.b.error("Oops! Something went wrong... Please try again. If the problem persists, contact our customer support",{position:"top-right",duration:3e3})}))},e.changeCurrentPage=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.query,n=this.props.query,r=t.currentPage,c=this.state.currentPage;a!==n&&(this.setState({currentPage:1,images:[],error:null}),this.getImages(n,c)),a===n&&r!==c&&(this.setState({error:null}),this.getImages(n,c)),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.error,r=this.props.onSelect;return Object(d.jsxs)(d.Fragment,{children:[a===Q&&Object(d.jsxs)("h1",{children:["Error: ",n]}),Object(d.jsx)("ul",{className:M.a.ImageGallery,children:t.length>0&&t.map((function(e){return Object(d.jsx)(O,{src:e.webformatURL,tags:e.tags,largeImage:e.largeImageURL,onClick:r},e.id)}))}),a===P&&Object(d.jsx)(y.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100}),a===B&&t.length>0&&Object(d.jsx)(x,{onClick:this.changeCurrentPage})]})}}]),a}(n.Component),E=a(12),T=a.n(E),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).escFunction=function(t){27===t.keyCode&&e.props.onClose()},e.closeModal=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction)}},{key:"render",value:function(){var e=this,t=this.props,a=t.src,n=t.tags;return Object(d.jsx)("div",{className:T.a.Overlay,onClick:function(t){e.closeModal(t)},children:Object(d.jsx)("div",{className:T.a.Modal,children:Object(d.jsx)("img",{src:a,alt:n})})})}}]),a}(n.Component),L=(a(72),a(73),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",selectedImage:null,selectedImageTags:null},e.saveSearchQuery=function(t){e.setState({searchQuery:t})},e.handleSelectImage=function(t){var a=t.largeImage,n=t.tags;e.setState({selectedImage:a,selectedImageTags:n})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.selectedImage,n=e.selectedImageTags;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{onSubmit:this.saveSearchQuery}),Object(d.jsx)(F,{query:t,onSelect:this.handleSelectImage}),a&&Object(d.jsx)(q,{src:a,tags:n,onClose:this.handleCloseModal}),Object(d.jsx)(m.a,{})]})}}]),a}(n.Component)),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),U()},9:function(e,t,a){e.exports={wrapper:"SearchBar_wrapper__znV1k",form:"SearchBar_form__3h4KT",submit_btn:"SearchBar_submit_btn__1qvUV",search_input:"SearchBar_search_input__3pIYI",icon:"SearchBar_icon__33iZ3"}}},[[74,1,2]]]);
//# sourceMappingURL=main.a3a046e5.chunk.js.map