import Box from '@mui/material/Box';
import { Container, TextField } from '@mui/material';



const Profile = () => {
  return (
    <Container maxWidth={'xl'} className='min-h-full h-auto shadow-xl rounded-md'>
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="flex justify-start items-center mb-6">
          <div className="relative" style={{ width: "170px", height: "200px" }}>
            <img
              src="https://www.paratime.vn/wp-content/uploads/2019/09/timestudio.vn-corporate-headshot-pricing-01.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover border border-gray-300"
            />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold">THÔNG TIN SINH VIÊN</h2>
          <Box component="form" noValidate autoComplete="off">
            <div className="mb-4">
              <label className="block font-medium">Họ tên:</label>
              <TextField
                id="standard-basic"
                label="Họ tên"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Năm vào trường:</label>
              <TextField
                id="standard-basic"
                label="Năm vào trường"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Bậc đào tạo:</label>
              <TextField
                id="standard-basic"
                label="Bậc đào tạo"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Chương trình:</label>
              <TextField
                id="standard-basic"
                label="Chương trình"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Khoa/Viện quản lý:</label>
              <TextField
                id="standard-basic"
                label="Khoa/Viện quản lý"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Tình trạng học tập:</label>
              <TextField
                id="standard-basic"
                label="Tình trạng học tập"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Giới tính:</label>
              <TextField
                id="standard-basic"
                label="Giới tính"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Lớp:</label>
              <TextField
                id="standard-basic"
                label="Lớp"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Khóa học:</label>
              <TextField
                id="standard-basic"
                label="Khóa học"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Email:</label>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className="w-full"
              />
            </div>
          </Box>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold">THÔNG TIN HỌC TẬP</h2>
          <Box component="form" noValidate autoComplete="off">
            <div className="mb-4">
              <label className="block font-medium">Tổng kết học kỳ:</label>
              <TextField
                id="standard-basic"
                label="Tổng kết học kỳ"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Trung bình tích lũy:</label>
              <TextField
                id="standard-basic"
                label="Trung bình tích lũy"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Số TC nợ đăng ký:</label>
              <TextField
                id="standard-basic"
                label="Số TC nợ đăng ký"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Trình độ sinh viên:</label>
              <TextField
                id="standard-basic"
                label="Trình độ sinh viên"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Mức độ cảnh báo:</label>
              <TextField
                id="standard-basic"
                label="Mức độ cảnh báo"
                variant="standard"
                className="w-full"
              />
            </div>
          </Box>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold">THÔNG TIN CÁ NHÂN</h2>
          <Box component="form" noValidate autoComplete="off">
            <div className="mb-4">
              <label className="block font-medium">Dân tộc:</label>
              <TextField
                id="standard-basic"
                label="Dân tộc"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Năm TN cấp 3:</label>
              <TextField
                id="standard-basic"
                label="Năm TN cấp 3"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Địa chỉ:</label>
              <TextField
                id="standard-basic"
                label="Địa chỉ"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Số CCCD:</label>
              <TextField
                id="standard-basic"
                label="Số CCCD"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Điện thoại:</label>
              <TextField
                id="standard-basic"
                label="Điện thoại"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Email:</label>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Ngày sinh:</label>
              <TextField
                id="standard-basic"
                label="Ngày sinh"
                variant="standard"
                className="w-full"
              />
            </div>
          </Box>
        </div>
      </div>
    </Container>
  );
};
export default Profile;