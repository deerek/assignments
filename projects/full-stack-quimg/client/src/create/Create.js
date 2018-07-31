import React, {Component} from 'react';
import HeaderCreate from './components/HeaderCreate';
import UnsplashCreate from './components/UnsplashCreate';
import UnsplashSearch from './containers/UnsplashSearch';

class Create extends Component {
    render() {
        return (
            <div className="createWrapper">
                <HeaderCreate />
                <h1>This is the Create view</h1>
                <p>After selecting an image, the "Next" button in the header will activate, and clicking it will take you to the view to edit your Quimg</p>
                <UnsplashSearch />
                <UnsplashCreate />
            </div>
        )
    }
}


export default Create;



/////////////////////// SOMETHING LIKE THIS FOR FINISHING CREATE
// https://github.com/krissnawat/medium-clone-on-node/

// publishStory () {
//     this.setState({
//       loading: true
//     })
//     console.log(this.state)  
//     console.log('publishing...')
//     const _url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"
//     const formdata = new FormData()
//     formdata.append('text', this.state.text)
//     formdata.append('image', this.state.imgSrc)
//     formdata.append('title', document.getElementById('editor-title').value)
//     formdata.append('author_id', this.props.user._id)
//     formdata.append('description', this.state.description)
//     formdata.append('claps', 0)
//     axios.post(`${_url}article`, /*{
//       text: this.state.text,
//       title: document.getElementById('editor-title').value,
//       claps: 0,
//       description: this.state.description,
//       feature_img: this.state.imgSrc,
//       author_id: this.props.user._id
//     }*/formdata).then((res) => {
//       this.setState({
//         loading: false
//       })
//       console.log(res.data)
//     }).catch((err)=>{console.log(err); this.setState({loading: false})})
//   } 

/////////////////// THEN TO CREATE, JUST HAVE TO CALL publishStory IN HEADER BUTTON
// <EditorHeader publish={this.publishStory} loading={this.state.loading} />

