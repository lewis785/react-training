import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetai from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('youtube')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetai video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
