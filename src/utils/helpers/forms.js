"use strict";

exports.formBrand = () => [
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

exports.formCategory = () => [
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

exports.formSubcategory = ({ categories = [] }) => [
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

exports.formMeasurementunit = () => [
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

exports.formMaterial = ({
  brands = [],
  categories = [],
  subcategories = [],
  measurement_units = [],
}) => [
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
        variant: "with-add-button",
        route: "/dashboard/catalogs?openModal=brand",
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
        variant: "with-add-button",
        route: "/dashboard/catalogs",
        route: "/dashboard/catalogs?openModal=category",
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
        variant: "with-add-button",
        route: "/dashboard/catalogs",
        route: "/dashboard/catalogs?openModal=subcategory",
        isRequired: true,
        isDisabled: true,
        options: {
          arr: subcategories,
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
        variant: "with-add-button",
        route: "/dashboard/catalogs",
        route: "/dashboard/catalogs?openModal=measurementUnit",
        options: {
          arr: measurement_units,
          value: "id_measurement_unit",
          label: "name",
        },
      },
    },
  ],
];

exports.formProduct = ({ materials }) => [
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
        label: "Materials",
        name: "id_material[]",
        isRequired: true,
        isMultiple: true,
        variant: "with-add-button",
        route: "/dashboard/materials?openModal=material",
        options: {
          arr: materials,
          value: "id_material",
          label: "name",
        },
      },
    },
  ],
];
