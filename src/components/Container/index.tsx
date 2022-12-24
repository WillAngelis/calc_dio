type ContainerProps = {
  children: React.ReactNode; // 👈️ type children
};

export const Container = ({children}:ContainerProps) => {
  return (
    <main className="flex h-screen justify-center items-center">
      {children}
    </main>
  )
}
