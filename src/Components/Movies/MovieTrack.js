import React, { Component } from 'react'
import Preview from './Preview'


export default class MovieTrack extends Component {
    
    state = {
        track : 0,
        numberPerTrack : 4,
        proprety : "",
        properties : "",
        
    }

    
    render() {
        const next = () => {
            // var {track, numberPerTrack, proprety} = this.state;
            this.setState(prevState => {
                return {
                    properties : this.state.proprety.slice(((prevState.track + 1) * prevState.numberPerTrack) ,
                    (prevState.track + 1) * prevState.numberPerTrack + 4),
                    track : prevState.track + 1
                }
            })
        }

        const previous = () => {
            // var {track, numberPerTrack, proprety} = this.state;
            this.setState(prevState => {
                return {
                    properties : this.state.proprety.slice(((prevState.track - 1) * prevState.numberPerTrack) ,
                    (prevState.track - 1) * prevState.numberPerTrack + 4),
                    track : prevState.track - 1
                }
            })
        }

        // const previous = () => {
            
        //     var {track, numberPerTrack, proprety} = this.state;
        //     this.setState( {
        //         properties : proprety.slice(track * numberPerTrack,track * numberPerTrack + 4),
        //         track : track - 1
        //     })
        //     var {track, numberPerTrack, proprety} = this.state;
        //     console.log(track * numberPerTrack,track * numberPerTrack + 4);
        // }

        
        {
            if (this.state.properties == "") {
                return <div>Vacio</div>
            } else {
                return (
                    <div className= "movieTrack">

                        <button onClick = {previous}
                            disabled = {(this.state.track == 0) ? true : false}
                        >Previous</button>
                        <button onClick = {next}
                            disabled = {(this.state.track == 4) ? true : false}
                        >Next</button>
                        {
                            
                            this.state.properties.map((item, i) => {
                                // console.log()
                            let {poster_path} = item;
                            let baseUrl = "http://image.tmdb.org/t/p";
                            let completeUrl = `url("${baseUrl}/w500/${poster_path}")`;
                            
                            // console.log(completeUrl)
                            return <Preview key = {i} background = {{backgroundImage : completeUrl}} />

                        })
                        }
        
                    </div>
                )
            }
        }

    }

    componentDidMount() {
        console.log("El componente se monto")

        const key = "21f53417a5404d2ee865b5d4641ec478"
        const queryValue = "https://api.themoviedb.org/3/movie/popular?api_key=21f53417a5404d2ee865b5d4641ec478&language=en-US&page=1"


        // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg


        const query = fetch(queryValue)
                        .then(response => response.json())
                        .then(data => {
                        // data = d

                        // const getImages = (filePath, fileSize = "w500") => {
                        //     const baseUrl = "http://image.tmdb.org/t/p"
                        //     const completeUrl = `${baseUrl}/${fileSize}/${filePath}`

                        //     return console.log(completeUrl);
                        // }

                            console.log(data.results)

                            // console.log(d);
                            this.setState({
                                proprety : data.results,
                                properties : data.results.slice(0,4),
                            })
                        // return d
                        });

                
            }
}





