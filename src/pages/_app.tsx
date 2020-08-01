import React from "react"
import "../styles.css"

interface IProps {
  Component: any
  pageProps: any
}

export default function MyApp({ Component, pageProps }: IProps) {
  return <Component {...pageProps} />
}
