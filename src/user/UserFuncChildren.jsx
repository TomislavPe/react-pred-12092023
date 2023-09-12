export default function UserFuncChildren(props) {
    const [name, years] = props.children;
    return (
        <>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina.
            </p>
            {props.children}
        </>
    );
}
