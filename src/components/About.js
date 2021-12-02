import React from 'react'

export default function About(props) {
  return (
    <div className={`p-5 mb-4 bg-${props.mode === 'dark' ? '#1c1d1f' : 'white'} text-${props.mode === 'dark' ? 'white' : 'black'} rounded-3`}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">TextUtils</h1>
        <p className="col-md-8 fs-4">TextUtils is basically a text based utility website which can be used to make working with text a lot more easier. <br/> <br/>
          Some of the Features present in TextUtils are :
          <ul>
            <li>Covert to Lower/Upper Case</li>
            <li>Clear all text From the text area</li>
            <li>Remove Extra Spaces</li>
            <li>Count the numbers of Words and Character in the text</li>
            <li>Preview the piece of text</li><br />
          </ul>
          <h1>And.....</h1>
          <ul><li>An ultra Awesome Dark mode So you dont spoil your vision and keep working efficiently, Woohoo !</li></ul>
          <br/>
          And Whats more, We are constantly increasing the features we provide <br/>
          So Stay tuned and Keep using <strong>TextUtils</strong>.
        </p>
      </div>
    </div>
  )
}