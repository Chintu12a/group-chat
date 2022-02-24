import { Button } from '@chakra-ui/react'
import React from 'react'
import { Route } from 'react-router-dom'
import Chatpage from './pages/Chatpage'
import Homepage from './pages/Homepage'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Route path="/" exact component={Homepage}  />
            <Route path="/chats" component={Chatpage} />
        </div>
    )
}

export default App
