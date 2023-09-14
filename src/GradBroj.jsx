const GradBroj = ({ grad, broj, children }) => {
    return (
        <>
            <p>
                Odabrani grad je {grad} a trenutačni broj je {broj}
            </p>
            <p>{children}</p>
        </>
    );
};

export default GradBroj;
