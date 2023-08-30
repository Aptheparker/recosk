const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-page__content">
        <div className="loading-page__content__logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="loading-page__content__loading">
          <div className="loading-page__content__loading__bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
