"use strict";

exports.newBrandForm = () => [
  [
    {
      componentName: "Input",
      options: {
        label: "Name",
        name: "name",
        type: "text",
        isRequired: true,
      },
    },
  ],
];

exports.newCategoryForm = () => [
  [
    {
      componentName: "Input",
      options: {
        label: "Name",
        name: "name",
        type: "text",
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Textarea",
      options: {
        label: "Description",
        name: "description",
        type: "text",
        rows: 2,
        isRequired: true,
      },
    },
  ],
];

exports.newSubcategoryForm = ({ categories }) => [
  [
    {
      componentName: "Input",
      options: {
        label: "Name",
        name: "name",
        type: "text",
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Textarea",
      options: {
        label: "Description",
        name: "description",
        type: "text",
        rows: 2,
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Select",
      options: {
        label: "Category",
        name: "id_category",
        isRequired: true,
        options: {
          arr: categories,
          value: "id_category",
          label: "name",
        },
      },
    },
  ],
];

exports.newMeasurementunitForm = () => [
  [
    {
      componentName: "Input",
      options: {
        label: "Name",
        name: "name",
        type: "text",
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Input",
      options: {
        label: "Code",
        name: "code",
        type: "text",
        isRequired: true,
      },
    },
  ],
];
