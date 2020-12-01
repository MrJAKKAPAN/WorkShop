import React from "react";
import PropTypes from "prop-types";

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map((contact, index) => (
      <li key={index}>
        {contact.name} - {contact.address}
      </li>
    ))}
  </ul>
);

// ใช้ในกรณี ไม่มีค่า prop ส่งเข้ามาไม่ให้ error
Contacts.defaultProps = {
  contacts: [],
};
// ตรวจสอบชนิดข้อมูล
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
