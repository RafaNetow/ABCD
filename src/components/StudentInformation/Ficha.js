import React from "react";
import {
  Select,
  Form,
  Col,
  Input,
  Button,
  Row,
  AutoComplete,
  DatePicker
} from "antd";
const { Option } = Select;

class StudenInformation extends React.Component {
  render() {
    const requireRule = {
      rules: [
        {
          required: true,
          message: "Este campo es requerido"
        }
      ]
    };
    const dateTimePickerRule = {
      rules: [
        { type: "object", required: true, message: "Seleccione la fecha" }
      ]
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Row>
          <Col span={8}>
            <Form.Item label="No Cuenta">
              {getFieldDecorator("num_cuenta", requireRule)(
                <AutoComplete placeholder="website">
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Anio de matricula">
              {getFieldDecorator("Anio de matricula", requireRule)(<Input />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="RNE">
              {getFieldDecorator("rne", requireRule)(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Nombres">
              {getFieldDecorator("nombres", requireRule)(<Input />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Apellidos">
              {getFieldDecorator("Apellidos", {
                rules: [
                  {
                    required: true,
                    message: "Este campo es requerido"
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Fecha de nacimiento">
              {getFieldDecorator("date-picker", dateTimePickerRule)(
                <DatePicker />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Curso" hasFeedback>
              {getFieldDecorator("curso", {
                rules: [{ required: true, message: "Seleccione una modalidad" }]
              })(
                <Select placeholder="Selecione el curso">
                  <Option value="curso1">Curso 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Modalidad" hasFeedback>
              {getFieldDecorator("Modalidad", {
                rules: [{ required: true, message: "Seleccione una modalidad" }]
              })(
                <Select placeholder="Selecione una modalidad">
                  <Option value="modalidad1">Modalidad 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Seccion" hasFeedback>
              {getFieldDecorator("Seccion", {
                rules: [{ required: true, message: "Seleccione una seccion" }]
              })(
                <Select placeholder="Selecione una seccion">
                  <Option value="seccion1">Seccion 1</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const StudenInformationForm = Form.create({ name: "register" })(
  StudenInformation
);
export default StudenInformationForm;
