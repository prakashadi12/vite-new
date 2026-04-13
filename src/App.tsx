return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );