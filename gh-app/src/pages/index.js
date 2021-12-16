import * as React from "react"
import Page from '../templates/page'


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}
// data
const links = [
  {
    text: "GitHub Repo",
    url: "https://github.com/williamng95/fintech-devops/",
    description:
      "Repo where the source lives"
  },
]

// markup
const IndexPage = () => {
  return (
    <Page>
        <title>Home Page</title>

        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
          update in real-time.{" "}
        </p>
        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url}>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>

            </li>
          ))}
        </ul>

    </Page>

  )
}

export default IndexPage
