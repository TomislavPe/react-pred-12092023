export default function UserFuncChildren(props) {
    const [name, years] = props.children;
    return (
        <>
            <h2>Funkcijska komponenta dva</h2>
            <p>Ime korisnika: {name}</p>
            <p>Dob korisnika: {years}</p>
            <p>Proslijeđeni children propsi: {props.children}</p>
        </>
    );
}
