import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Checkbox, Card, Button, Row, Col, Tag, Space, Modal, Form, Select } from 'antd';
import { ClockCircleOutlined, CalendarOutlined, EnvironmentOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../App';

const { Option } = Select;
// --- Styled Components ---

const PageContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
`;

const FiltersContainer = styled(Card)`
  width: 250px;
`;

const FilterTitle = styled.h3`
  margin-bottom: 16px;
`;

const CoursesContainer = styled.div`
  flex: 1;
`;

const CourseCard = styled(Card)`
  margin-bottom: 16px;
  .ant-card-head {
    background: #fff;
  }
`;

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  color: rgba(0,0,0,0.65);
  margin-top: 8px;
  & > span, & > .anticon {
    margin-right: 16px;
  }
`;

const ApplyBtn = styled(Button)`
  margin-top: 16px;
  align-self: flex-end;
`;

// --- Data ---

// const courses = [
//   {
//     title: 'Young Professionals visa',
//     description: 'Consulting and guidance to enter the ballot to apply for the India Young Professionals Scheme visa, and how the ballot system works',
//     location: 'United Kingdom',
//     type: 'Premium',
//     duration: '1 Months',
//     updated: 'An hour ago',
//   },
//   {
//     title: 'Skilled Worker visa',
//     description: 'Consulting to get a UK Skilled Worker visa from India; you must meet eligibility requirements, have a job offer, and apply for the visa',
//     location: 'United Kingdom',
//     type: 'Premium',
//     duration: '1 Months',
//     updated: '10 days ago',
//   },
//   {
//     title: 'Industrial Visits',
//     description: 'Consulting to experience and expertise industrial visits and to facilitate right knowledge in right areas',
//     location: 'Chennai',
//     type: 'Premium',
//     duration: '1 Months',
//     updated: '10 days ago',
//   },
// ];

// --- Main Component ---

const CoursePage = () => {
  const navigate = useNavigate();
  const userRaw = localStorage.getItem("user");
  const userDetail = userRaw ? JSON.parse(userRaw) : null;
  const { id } = useParams(); // get techBridgeId from route
  console.log('techBridgeId: ', id);
  const [courses, setCourses] = useState([])
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        isPremium: values.type === "Premium",
        techBridgeRef: id,
        createdBy: userDetail?._id,
      };

      await axios.post(`${API_URL}visa/addVisa`, payload);
      form.resetFields();
      setIsModalOpen(false);
      // Optional: refresh the course list
    } catch (err) {
      console.error("Failed to add course:", err);
    }
  };

  const fetchAllCourse = async () => {
    try {
      const response = await axios.get(`${API_URL}visa/allVisas`)
      console.log('response---course: ', response);
      setCourses(response.data)
    } catch (error) {
      console.log('error: ', error);

    }
  }

  useEffect(() => {
    if (id) {
      fetchAllCourse()
    }
  }, [id])

  const onClickEdit = async (id) => {
    try {
      const res = await axios.get(`${API_URL}visa/visa/${id}`);
      setIsModalOpen(true);
    } catch (error) {
      console.log('error: ', error);

    }
  }

  return (
    <PageContainer>
      {
        userDetail?.role === "Custodian" && <div style={{ display: "flex", justifyContent: "end", paddingBottom: 10 }}>
          <Button type="primary" onClick={showModal}>Add Courses</Button>
        </div>
      }
      <Row gutter={24}>
        {/* Sidebar Filters */}
        <Col>
          <FiltersContainer title="Filters">
            <FilterTitle>Topic</FilterTitle>
            <Input placeholder="e.g. Courses" style={{ marginBottom: 16 }} />

            <FilterTitle>Location</FilterTitle>
            <Input placeholder="e.g. Chennai" style={{ marginBottom: 16 }} />

            <Checkbox style={{ marginBottom: 8 }}>Free</Checkbox>
            <Checkbox>Premium</Checkbox>

            <div style={{ marginTop: 16 }}>
              <a href="#">View more filters &gt;</a>
            </div>
            <div style={{ marginTop: 8 }}>
              <a href="#">Clear all</a>
            </div>
          </FiltersContainer>
        </Col>

        {/* Courses List */}
        <Col flex="auto">
          <CoursesContainer>
            {courses.map((course, idx) => (
              <CourseCard key={idx} bordered>
                <Card.Grid style={{ width: '100%', padding: '16px' }}>
                  <Space direction="horizontal" style={{ justifyContent: 'space-between', width: '100%' }}>
                    <h3 style={{ margin: 0 }}>{course.title}</h3>
                    <div style={{ display: "flex", gap: 15 }}>
                      {/* <StarOutlined style={{ fontSize: '20px', color: '#ccc',cursor: "pointer" }} /> */}
                      {
                        userDetail?.role === "Custodian" &&
                        < EditOutlined onClick={() => onClickEdit(course._id)} style={{ cursor: "pointer" }} />
                      }
                    </div>
                  </Space>

                  <p style={{ margin: '8px 0' }}>{course.description}</p>

                  <MetaContainer>
                    <EnvironmentOutlined /> <span>{course.country}</span>
                    <Tag color="blue">{course.isPremium ? "Premium" : "Free"}</Tag>
                    <CalendarOutlined /> <span>{course.duration}</span>
                    <ClockCircleOutlined /> <span>{course.updatedAt}</span>
                  </MetaContainer>

                  <ApplyBtn type="primary">Apply now &gt;</ApplyBtn>
                </Card.Grid>
              </CourseCard>
            ))}
          </CoursesContainer>
        </Col>
      </Row>

      {/* Modal for adding course */}
      <Modal
        title="Add New Course"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        okText="Add Course"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input placeholder="Enter course title" />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="country" label="Country" initialValue="United Kingdom">
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Type" rules={[{ required: true }]}>
            <Select placeholder="Select course type">
              <Option value="Free">Free</Option>
              <Option value="Premium">Premium</Option>
            </Select>
          </Form.Item>
          <Form.Item name="duration" label="Duration" initialValue="1 Month">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default CoursePage;
