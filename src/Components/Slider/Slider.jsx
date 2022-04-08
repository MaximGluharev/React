import React, { useEffect, useState, Children, cloneElement } from "react";
import "./Slider.scss"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"






const Carusel = ({children}) => {
  
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState([])

    const PAGE_WIDTH = 450

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {

            const newOffset = currentOffset + PAGE_WIDTH
            console.log (newOffset)
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max (newOffset, maxOffset)
        })

    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        heigth: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,

                    },
                })
            })

        )


    }, [])



    return (
        <div className="main-container">
            <div className="window">
                <FaChevronLeft className="arrow" size="24px" onClick={handleLeftArrowClick}/>
                    <div className="all-pages-container"
                        style={{
                        transform:`translateX(${offset}px)`,

                        }}
                    
                    >{pages}</div>
                <FaChevronRight className="arrow2" size="24px" onClick={handleRightArrowClick}/>   
            </div>

 
        </div>


    )



}


export default Carusel