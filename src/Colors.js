import React, {useEffect, useState} from 'react'
import rgbToHex from './utils.js'

const Colors = ({color}) => {
    const [colorArray, setColorArray] = useState([])

    const setColors = () => {

        let rgbColor = setRGBforSelected()
        let tints = generateTints(rgbColor)
        let shades = generateShades(rgbColor)

        setColorArray([...tints, rgbColor, ...shades])
    }

    useEffect(() => {
        setColors()
    }, [])

    const setRGBforSelected = () => {
        let rgb = hexToRgb(color)
        return rgb
    }
    
    const hexToRgb = (hex) => {
        return (hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))
        )
    }

    const generateTints = (rgbColor) => {
        let increments = rgbColor.map((value) => (255 - value)/10)
        let intervals = [...Array(10)].map((x, i) => {
            let tint = rgbColor.map((value, j) => Math.round(value + (increments[j] * (i + 1))))
            return tint
        })
        return intervals.reverse()
    }

    const generateShades = (rgbColor) => {
        let increments = rgbColor.map((value) => value/10)
        let intervals = [...Array(10)].map((x, i) => {
            let shade = rgbColor.map((value, j) => Math.round(value - (increments[j] * (i + 1))))
            return shade
        })
        return intervals
    }

  return (
    <section className="colors">
        {colorArray.map((rgb, i) => 
            <div key={i} className="color" style={{background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`}}>
                <p>{rgbToHex(rgb[0], rgb[1], rgb[2])}</p>
            </div>
        )}
        

    </section>
    
  )
}

export default Colors