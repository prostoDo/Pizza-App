import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="129" cy="87" r="87" /> 
    <rect x="-2" y="185" rx="10" ry="10" width="264" height="19" /> 
    <rect x="144" y="177" rx="0" ry="0" width="0" height="12" /> 
    <rect x="0" y="216" rx="10" ry="10" width="254" height="50" /> 
    <rect x="-1" y="289" rx="10" ry="10" width="95" height="23" /> 
    <rect x="145" y="289" rx="10" ry="10" width="105" height="33" />
  </ContentLoader>
)

export default Skeleton