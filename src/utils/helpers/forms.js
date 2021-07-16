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

exports.formComponent = ({
  brands = [],
  categories = [],
  measurement_units = [],
  fields = {},
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
  ],
  [
    !fields.stock
      ? {
          componentName: "Input",
          options: {
            label: "Stock",
            name: "stock",
            type: "number",
            isRequired: true,
            min: "0",
          },
        }
      : null,
    !fields.security_stock
      ? {
          componentName: "Input",
          options: {
            label: "Security Stock",
            name: "security_stock",
            type: "number",
            isRequired: true,
            min: "0",
          },
        }
      : null,
    !fields.wait_time
      ? {
          componentName: "Input",
          options: {
            label: "Wait Time (Weeks)",
            name: "wait_time",
            type: "number",
            isRequired: true,
            min: "1",
            max: "4",
          },
        }
      : null,
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

exports.formProduct = () => [
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
        label: "Production Time",
        name: "production_time",
        type: "number",
        isRequired: true,
        min: "1",
        max: "4",
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Installed Capacity",
        name: "installed_capacity",
        type: "number",
        isRequired: true,
        min: "0",
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Stock",
        name: "stock",
        type: "number",
        isRequired: true,
        min: "0",
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
];

exports.formAddProductComponent = ({ components }) => [
  [
    {
      componentName: "Select",
      options: {
        label: "Component",
        name: "id_component",
        isRequired: true,
        variant: "with-add-button",
        route: "/dashboard/inventory",
        route: "/dashboard/inventory?openModal=component",
        options: {
          arr: components,
          value: "id_component",
          label: "name",
        },
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Quantity",
        name: "quantity",
        type: "number",
        isRequired: true,
        min: "1",
      },
    },
  ],
];

exports.formPurchase = () => [
  [
    {
      componentName: "Input",
      options: {
        label: "Reference Code",
        name: "reference_code",
        type: "text",
        isRequired: true,
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Creation Date",
        name: "creation_date",
        type: "date",
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Textarea",
      options: {
        label: "Details",
        name: "details",
        rows: 2,
        isRequired: true,
      },
    },
  ],
];

exports.formAddPurchaseComponent = ({ components }) => [
  [
    {
      componentName: "Select",
      options: {
        label: "Component",
        name: "id_component",
        isRequired: true,
        variant: "with-add-button",
        route: "/dashboard/inventory?openModal=component",
        options: {
          arr: components,
          value: "id_component",
          label: "name",
        },
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Quantity",
        name: "quantity",
        type: "number",
        isRequired: true,
        min: "1",
      },
    },
  ],
];

exports.formSale = () => [
  [
    {
      componentName: "Input",
      options: {
        label: "Reference Code",
        name: "reference_code",
        type: "text",
        isRequired: true,
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Creation Date",
        name: "creation_date",
        type: "date",
        isRequired: true,
      },
    },
  ],
  [
    {
      componentName: "Textarea",
      options: {
        label: "Details",
        name: "details",
        rows: 2,
        isRequired: true,
      },
    },
  ],
];

exports.formAddSaleProduct = ({ products }) => [
  [
    {
      componentName: "Select",
      options: {
        label: "Product",
        name: "id_product",
        isRequired: true,
        variant: "with-add-button",
        route: "/dashboard/products/new",
        options: {
          arr: products,
          value: "id_product",
          label: "name",
        },
      },
    },
    {
      componentName: "Input",
      options: {
        label: "Quantity",
        name: "quantity",
        type: "number",
        isRequired: true,
        min: "1",
      },
    },
  ],
];
