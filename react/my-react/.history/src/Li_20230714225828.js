const Li = (props) =>{

    const [text,direction] = props.props;
    return (
        <li className={`chat ${direction === 'outgoing' ? 'outgoing' : 'incoming'}`}>
            <p></p>
        </li>
    )
}