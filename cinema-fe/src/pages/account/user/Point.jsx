const Point = () => {
  return (
    <div className="point-container">
      <div className="heading">ĐIỂM THƯỞNG</div>

      <div className="box-top">
        <div className="box-top-title">Tổng Quát</div>
        <hr />
        <div className="box-top-content">
          <div className="left">
            <div className="box-top-content-item">
              <spans className="box-top-content-item-title">
                Tổng Chi Tiêu 2023:
              </spans>
              <strong>0 đ</strong>
            </div>
            <div className="box-top-content-item">
              <spans className="box-top-content-item-title">
                Điểm Sẽ Nhận:
              </spans>
              <strong>0 P</strong>
            </div>
            <div className="box-top-content-item">
              <spans className="box-top-content-item-title">
                Điểm Hiện Tại:
              </spans>
              <strong>0 P</strong>
            </div>
          </div>
          <div className="right">
            <img
              src={
                "https://www.cgv.vn/skin//frontend/cgv/default/images/cgv-point.jpg"
              }
            />
          </div>
        </div>
      </div>
      <div className="box-search">
        <div className="box-search-tile">Lịch Sử Điểm</div>
        <hr />
        <div className="box-search-content">
          <div className="box-search-item title">tìm nhanh</div>
          <div className="box-search-item btn-search-fast">1 tuần</div>
          <div className="box-search-item btn-search-fast">1 tháng </div>
          <div className="box-search-item btn-search-fast">3 tháng </div>
          <div className="box-search-item date">
            <input type={"date"} />
            <span style={{ padding: "0 4px" }}>~</span>
            <input type={"date"} />
          </div>
          <div className="box-search-item btn-search">Tìm kiếm</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Point;
