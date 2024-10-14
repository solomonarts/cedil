import React, { useState } from "react";
import { Input, Button, message } from "antd";

const MailchimpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mailchimp form action URL
    const url =
      "https://your-list-id.usX.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID";

    const form = document.createElement("form");
    form.action = url;
    form.method = "POST";
    form.target = "_blank";

    const fields = [
      { name: "FNAME", value: formData.name },
      { name: "LNAME", value: formData.surname },
      { name: "EMAIL", value: formData.email },
    ];

    fields.forEach((field) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setLoading(false);
    message.success(
      "Subscription successful. Please check your email to confirm."
    );
    onClose(); // Close modal after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        size="large"
        className="rounded-md"
        required
      />
      <Input
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Surname"
        size="large"
        className="rounded-md"
        required
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        size="large"
        className="rounded-md"
        required
      />
      <Button
        htmlType="submit"
        size="large"
        loading={loading}
        className="mt-4 rounded-md bg-[#053744] text-white hover:bg-[#05374450] hover:text-[#053744]"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default MailchimpForm;
