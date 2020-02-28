import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from '../templates/prism-theme'
import "./code.scss"

export default class Code extends React.Component {
    render() {
        return (
            <div className={"code-container "+ (this.props.alignment || "") +" "+ (this.props.size || "")}>
                <Highlight {...defaultProps} code={this.props.snippet} language={this.props.language} theme={theme}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span
                            {...getTokenProps({ token, key })}
                            />
                        ))}
                        </div>
                    ))}
                    </pre> 
                    )
                }
                </Highlight>
            </div>
        )
    }
}
