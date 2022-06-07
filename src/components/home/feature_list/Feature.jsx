import React from 'react'
import './feature.css'

const Feature = () => {
  return (
    <div id='feature'>
        <div className="container">
            <div className="feature_grid grid3">
                <div className="f_grid">
                    <div className="f_grid_left">
                        <h1 className="green_number">
                            01
                        </h1>
                    </div>
                    <div className="f_grid_right">
                        <h1>Digital Branding</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, facilis sunt. Accusantium libero ex maiores vero labore fugit quis et quibusdam, dolores obcaecati in hic quasi id, deserunt quae ut.</p>
                    </div>
                </div>
                <div className="f_grid">
                    <div className="f_grid_left">
                        <h1 className="green_number">
                            02
                        </h1>
                    </div>
                    <div className="f_grid_right">
                        <h1>Team Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, facilis sunt. Accusantium libero ex maiores vero labore fugit quis et quibusdam, dolores obcaecati in hic quasi id, deserunt quae ut.</p>
                    </div>
                </div>
                <div className="f_grid">
                    <div className="f_grid_left">
                        <h1 className="green_number">
                            03
                        </h1>
                    </div>
                    <div className="f_grid_right">
                        <h1>Creative Mind</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, facilis sunt. Accusantium libero ex maiores vero labore fugit quis et quibusdam, dolores obcaecati in hic quasi id, deserunt quae ut.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature