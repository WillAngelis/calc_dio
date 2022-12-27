type ContainerProps = {
    children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return (
        <main className="flex h-screen justify-center items-center flex-col">
            {children}
        </main>
    );
};
