// declaration.d.ts
// declare module
declare module '*.scss';

// configure for css-modules
declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.json' {
    const value: any;
    export default value;
}

//images
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";