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

exports.newMaterialForm = ({ brands, categories, measurement_units }) => [
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
    {
      componentName: "Input",
      options: {
        label: "Stock",
        name: "stock",
        type: "number",
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
        rows: 2,
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Select",
      options: {
        label: "Brand",
        name: "id_brand",
        isRequired: true,
        options: {
          arr: brands,
          value: "id_brand",
          label: "name",
        },
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
    {
      componentName: "Select",
      options: {
        label: "Subcategory",
        name: "id_subcategory",
        isRequired: true,
        options: {
          arr: [],
          value: "id_subcategory",
          label: "name",
        },
      },
    },
  ],
  [
    {
      componentName: "Select",
      options: {
        label: "Measurement unit",
        name: "id_measurement_unit",
        isRequired: true,
        options: {
          arr: measurement_units,
          value: "id_measurement_unit",
          label: "name",
        },
      },
    },
  ],
];
