import React from 'react'

const Extra = () => {
  return (
    <>
    <div className='center my-10 flex-wrap'>
        <div className='center flex-col w-[33%] p-10 text-center'>
            <h2>Why some people look younger than their actual age?</h2>
            <p>Even people of the same age may look very different in facial age. Facial age has a lot to do with genetics, and secondly, it has a lot to do with lifestyle habits, skin conditions, and life stress.</p>
        </div>
        <div className='center flex-col w-[33%] p-10 text-center'>
            <h2>How to make yourself look younger?</h2>
            <p>We cannot control the genetic factors. But we can keep our skin in good condition by exercising regularly, using skin care products, reducing staying up late, drinking less alcohol, and not smoking, so that we can look younger than our actual age.</p>
        </div>
        <div className='center flex-col w-[33%] p-10 text-center'>
            <h2>How to test how old I am??</h2>
            <p>We used thousands of photos to train the facial age prediction model (to detect how old do I look) under the premise of complying with privacy regulations. At present, the prediction accuracy of this model is very high, and it can objectively evaluate the age of your face.</p>
        </div>
    </div>
    </>
  )
}

export default Extra