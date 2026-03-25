// // import { CollectionConfig } from 'payload'

// // export const ProjectDetailsComponents: CollectionConfig = {
// //   slug: 'project-details-component',
// //   admin: {
// //     useAsTitle: 'componentName',
// //     defaultColumns: ['componentName', 'heroSection.title', 'updatedAt'],
// //     group: 'Components',
// //   },
// //   access: {
// //     read: () => true,
// //   },
// //   fields: [
// //     {
// //       name: 'componentName',
// //       type: 'text',
// //       required: true,
// //       defaultValue: 'Project Details Component',
// //     },
// //     {
// //       name: 'slug',
// //       type: 'text',
// //       label: 'URL Slug',
// //       unique: true,
// //       required: true,
// //       admin: {
// //         position: 'sidebar',
// //         description: 'Used in URL: /projects/your-slug-here',
// //       },
// //       hooks: {
// //         beforeValidate: [
// //           ({ data, originalDoc }) => {
// //             if (!data.slug && data.heroSection?.title) {
// //               return data.heroSection.title
// //                 .toLowerCase()
// //                 .replace(/[^a-z0-9]+/g, '-')
// //                 .replace(/^-+|-+$/g, '')
// //             }
// //             return data.slug
// //           },
// //         ],
// //       },
// //     },
// //     {
// //       name: 'heroSection',
// //       type: 'group',
// //       label: 'Hero Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'className',
// //           type: 'text',
// //           label: 'Additional CSS Classes',
// //           defaultValue: 'project-post-hero-block',
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'padding',
// //           type: 'group',
// //           label: 'Padding',
// //           fields: [
// //             {
// //               name: 'top',
// //               type: 'text',
// //               label: 'Padding Top',
// //             },
// //             {
// //               name: 'bottom',
// //               type: 'text',
// //               label: 'Padding Bottom',
// //             },
// //             {
// //               name: 'left',
// //               type: 'text',
// //               label: 'Padding Left',
// //             },
// //             {
// //               name: 'right',
// //               type: 'text',
// //               label: 'Padding Right',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'titleBlock',
// //           type: 'group',
// //           label: 'Title Block',
// //           fields: [
// //             {
// //               name: 'title',
// //               type: 'text',
// //               label: 'Project Title',
// //               required: true,
// //               defaultValue: 'Qubex Design System',
// //             },
// //             {
// //               name: 'titleColor',
// //               type: 'text',
// //               label: 'Title Color',
// //             },
// //             {
// //               name: 'titleFontSize',
// //               type: 'text',
// //               label: 'Title Font Size',
// //             },
// //             {
// //               name: 'titleFontWeight',
// //               type: 'text',
// //               label: 'Title Font Weight',
// //             },
// //             {
// //               name: 'titleLineHeight',
// //               type: 'text',
// //               label: 'Title Line Height',
// //             },
// //             {
// //               name: 'titleAnimation',
// //               type: 'text',
// //               label: 'Title Animation Attribute',
// //               defaultValue: 'title-fadein',
// //             },
// //             {
// //               name: 'showHorizontalLine',
// //               type: 'checkbox',
// //               label: 'Show Horizontal Line',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'lineClassName',
// //               type: 'text',
// //               label: 'Line CSS Classes',
// //               defaultValue: 'horizontal-line black-seven',
// //             },
// //             {
// //               name: 'lineColor',
// //               type: 'text',
// //               label: 'Line Color',
// //             },
// //             {
// //               name: 'lineHeight',
// //               type: 'text',
// //               label: 'Line Height',
// //             },
// //             {
// //               name: 'lineAnimationWidth',
// //               type: 'text',
// //               label: 'Line Animation Width',
// //               admin: {
// //                 description: 'Final width percentage (e.g., 100%)',
// //               },
// //               defaultValue: '100%',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'descriptionBlock',
// //           type: 'group',
// //           label: 'Description Block',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Description Block',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'description',
// //               type: 'textarea',
// //               label: 'Description',
// //               defaultValue:
// //                 'Through strategic thinking and creative execution, we transform brand visions into powerful digital experiences that drive measurable growth.',
// //             },
// //             {
// //               name: 'descriptionColor',
// //               type: 'text',
// //               label: 'Description Color',
// //             },
// //             {
// //               name: 'descriptionFontSize',
// //               type: 'text',
// //               label: 'Description Font Size',
// //             },
// //             {
// //               name: 'descriptionLineHeight',
// //               type: 'text',
// //               label: 'Description Line Height',
// //             },
// //             {
// //               name: 'animationTransform',
// //               type: 'text',
// //               label: 'Initial Animation Transform',
// //               defaultValue: 'translate3d(0, 50px, 0)',
// //             },
// //             {
// //               name: 'animationOpacity',
// //               type: 'text',
// //               label: 'Initial Animation Opacity',
// //               defaultValue: '0',
// //             },
// //             {
// //               name: 'animationBlur',
// //               type: 'text',
// //               label: 'Initial Animation Blur',
// //               defaultValue: 'blur(5px)',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'button',
// //           type: 'group',
// //           label: 'CTA Button',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Button',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'text',
// //               type: 'text',
// //               label: 'Button Text',
// //               defaultValue: "Let's Connect",
// //             },
// //             {
// //               name: 'url',
// //               type: 'text',
// //               label: 'Button URL',
// //               defaultValue: '/contact',
// //             },
// //             {
// //               name: 'openInNewTab',
// //               type: 'checkbox',
// //               label: 'Open in New Tab',
// //               defaultValue: false,
// //             },
// //             {
// //               name: 'icon',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Button Icon',
// //             },
// //             {
// //               name: 'iconUrl',
// //               type: 'text',
// //               label: 'Button Icon URL (Fallback)',
// //               defaultValue:
// //                 'https://cdn.prod.website-files.com/699a4b6158bcc46e9ee8b909/69a95693136e5be97086dcc0_Icon%20(1).svg',
// //             },
// //             {
// //               name: 'iconAlt',
// //               type: 'text',
// //               label: 'Icon Alt Text',
// //               defaultValue: 'Button Icon',
// //             },
// //             {
// //               name: 'variant',
// //               type: 'text',
// //               label: 'Button Variant',
// //               defaultValue: 'base',
// //             },
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'Button CSS Classes',
// //               defaultValue: 'button-primary',
// //             },
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Button Background Color',
// //             },
// //             {
// //               name: 'hoverBackgroundColor',
// //               type: 'text',
// //               label: 'Hover Background Color',
// //             },
// //             {
// //               name: 'textColor',
// //               type: 'text',
// //               label: 'Button Text Color',
// //             },
// //             {
// //               name: 'borderRadius',
// //               type: 'text',
// //               label: 'Button Border Radius',
// //             },
// //             {
// //               name: 'padding',
// //               type: 'text',
// //               label: 'Button Padding',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'widgets',
// //           type: 'array',
// //           label: 'Info Widgets',
// //           admin: {
// //             description: 'Drag to reorder widgets (Client, Industry, Services, etc.)',
// //           },
// //           fields: [
// //             {
// //               name: 'type',
// //               type: 'text',
// //               label: 'Widget Type',
// //               required: true,
// //               defaultValue: 'Client',
// //             },
// //             {
// //               name: 'name',
// //               type: 'text',
// //               label: 'Widget Name',
// //               required: true,
// //             },
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Widget',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'typeColor',
// //               type: 'text',
// //               label: 'Type Text Color',
// //             },
// //             {
// //               name: 'typeFontSize',
// //               type: 'text',
// //               label: 'Type Font Size',
// //             },
// //             {
// //               name: 'nameColor',
// //               type: 'text',
// //               label: 'Name Text Color',
// //             },
// //             {
// //               name: 'nameFontSize',
// //               type: 'text',
// //               label: 'Name Font Size',
// //             },
// //             {
// //               name: 'nameFontWeight',
// //               type: 'text',
// //               label: 'Name Font Weight',
// //             },
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Widget Background Color',
// //             },
// //             {
// //               name: 'padding',
// //               type: 'text',
// //               label: 'Widget Padding',
// //             },
// //             {
// //               name: 'borderRadius',
// //               type: 'text',
// //               label: 'Widget Border Radius',
// //             },
// //           ],
// //           defaultValue: [
// //             {
// //               type: 'Client',
// //               name: 'Qubex Technologies',
// //               show: true,
// //             },
// //             {
// //               type: 'Industry',
// //               name: 'Product Platform',
// //               show: true,
// //             },
// //             {
// //               type: 'Services',
// //               name: 'UX Strategy',
// //               show: true,
// //             },
// //           ],
// //         },
// //         {
// //           name: 'widgetsBlockStyles',
// //           type: 'group',
// //           label: 'Widgets Block Styling',
// //           fields: [
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Widgets Block Background',
// //             },
// //             {
// //               name: 'gap',
// //               type: 'text',
// //               label: 'Gap Between Widgets',
// //             },
// //             {
// //               name: 'marginTop',
// //               type: 'text',
// //               label: 'Margin Top',
// //             },
// //             {
// //               name: 'animationTransform',
// //               type: 'text',
// //               label: 'Initial Animation Transform',
// //               defaultValue: 'translate3d(0, 50px, 0)',
// //             },
// //             {
// //               name: 'animationOpacity',
// //               type: 'text',
// //               label: 'Initial Animation Opacity',
// //               defaultValue: '0',
// //             },
// //             {
// //               name: 'animationBlur',
// //               type: 'text',
// //               label: 'Initial Animation Blur',
// //               defaultValue: 'blur(5px)',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'heroImage',
// //           type: 'group',
// //           label: 'Hero Image',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Hero Image',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'image',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Hero Image',
// //             },
// //             {
// //               name: 'imageUrl',
// //               type: 'text',
// //               label: 'Hero Image URL (Fallback)',
// //               defaultValue:
// //                 'https://cdn.prod.website-files.com/69abfb100c1a4efa44957483/69af0d9b7cb215053a89ef9b_Qubex%20Design%20System.png',
// //             },
// //             {
// //               name: 'alt',
// //               type: 'text',
// //               label: 'Image Alt Text',
// //               defaultValue: 'Project Image',
// //             },
// //             {
// //               name: 'responsiveImages',
// //               type: 'group',
// //               label: 'Responsive Images',
// //               fields: [
// //                 {
// //                   name: 'mobile',
// //                   type: 'upload',
// //                   relationTo: 'media',
// //                   label: 'Mobile Image (500px)',
// //                 },
// //                 {
// //                   name: 'mobileUrl',
// //                   type: 'text',
// //                   label: 'Mobile Image URL',
// //                 },
// //               ],
// //             },
// //             {
// //               name: 'sizes',
// //               type: 'text',
// //               label: 'Responsive Sizes Attribute',
// //               defaultValue: '(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px',
// //             },
// //             {
// //               name: 'borderRadius',
// //               type: 'text',
// //               label: 'Image Border Radius',
// //             },
// //             {
// //               name: 'boxShadow',
// //               type: 'text',
// //               label: 'Image Box Shadow',
// //             },
// //             {
// //               name: 'animationOpacity',
// //               type: 'text',
// //               label: 'Initial Animation Opacity',
// //               defaultValue: '0',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: 'bannerImageSection',
// //       type: 'group',
// //       label: 'Banner Image Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'className',
// //           type: 'text',
// //           label: 'Additional CSS Classes',
// //           defaultValue: 'project-banner-image-blcok',
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'padding',
// //           type: 'group',
// //           label: 'Padding',
// //           fields: [
// //             {
// //               name: 'top',
// //               type: 'text',
// //               label: 'Padding Top',
// //             },
// //             {
// //               name: 'bottom',
// //               type: 'text',
// //               label: 'Padding Bottom',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'marginTop',
// //           type: 'text',
// //           label: 'Margin Top',
// //         },
// //         {
// //           name: 'marginBottom',
// //           type: 'text',
// //           label: 'Margin Bottom',
// //         },
// //         {
// //           name: 'image',
// //           type: 'upload',
// //           relationTo: 'media',
// //           label: 'Banner Image',
// //         },
// //         {
// //           name: 'imageUrl',
// //           type: 'text',
// //           label: 'Banner Image URL (Fallback)',
// //           defaultValue:
// //             'https://cdn.prod.website-files.com/69abfb100c1a4efa44957483/69af0dbb573dab0f5d5b6b19_Qubex%20Design%20System-banner.png',
// //         },
// //         {
// //           name: 'alt',
// //           type: 'text',
// //           label: 'Image Alt Text',
// //           defaultValue: 'Project Banner',
// //         },
// //         {
// //           name: 'responsiveImages',
// //           type: 'group',
// //           label: 'Responsive Images',
// //           fields: [
// //             {
// //               name: 'mobile',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Mobile Image (500px)',
// //             },
// //             {
// //               name: 'mobileUrl',
// //               type: 'text',
// //               label: 'Mobile Image URL',
// //             },
// //             {
// //               name: 'tablet',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Tablet Image (800px)',
// //             },
// //             {
// //               name: 'tabletUrl',
// //               type: 'text',
// //               label: 'Tablet Image URL',
// //             },
// //             {
// //               name: 'desktop',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Desktop Image (1080px)',
// //             },
// //             {
// //               name: 'desktopUrl',
// //               type: 'text',
// //               label: 'Desktop Image URL',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'sizes',
// //           type: 'text',
// //           label: 'Responsive Sizes Attribute',
// //           defaultValue: '(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px',
// //         },
// //         {
// //           name: 'borderRadius',
// //           type: 'text',
// //           label: 'Image Border Radius',
// //         },
// //         {
// //           name: 'animationOpacity',
// //           type: 'text',
// //           label: 'Initial Animation Opacity',
// //           defaultValue: '0',
// //         },
// //         {
// //           name: 'maxWidth',
// //           type: 'text',
// //           label: 'Max Width',
// //         },
// //       ],
// //     },
// //     {
// //       name: 'contentSection',
// //       type: 'group',
// //       label: 'Content Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'className',
// //           type: 'text',
// //           label: 'Additional CSS Classes',
// //           defaultValue: 'porject-post-block',
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'padding',
// //           type: 'group',
// //           label: 'Padding',
// //           fields: [
// //             {
// //               name: 'top',
// //               type: 'text',
// //               label: 'Padding Top',
// //             },
// //             {
// //               name: 'bottom',
// //               type: 'text',
// //               label: 'Padding Bottom',
// //             },
// //             {
// //               name: 'left',
// //               type: 'text',
// //               label: 'Padding Left',
// //             },
// //             {
// //               name: 'right',
// //               type: 'text',
// //               label: 'Padding Right',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'marginTop',
// //           type: 'text',
// //           label: 'Margin Top',
// //         },
// //         {
// //           name: 'marginBottom',
// //           type: 'text',
// //           label: 'Margin Bottom',
// //         },
// //         {
// //           name: 'richTextWrapper',
// //           type: 'group',
// //           label: 'Rich Text Wrapper Styling',
// //           fields: [
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'Wrapper CSS Classes',
// //               defaultValue: 'project-post-rich-text-wrap',
// //             },
// //             {
// //               name: 'maxWidth',
// //               type: 'text',
// //               label: 'Max Width',
// //             },
// //             {
// //               name: 'animationTransform',
// //               type: 'text',
// //               label: 'Initial Animation Transform',
// //               defaultValue: 'translate3d(0, 50px, 0)',
// //             },
// //             {
// //               name: 'animationOpacity',
// //               type: 'text',
// //               label: 'Initial Animation Opacity',
// //               defaultValue: '0',
// //             },
// //             {
// //               name: 'animationBlur',
// //               type: 'text',
// //               label: 'Initial Animation Blur',
// //               defaultValue: 'blur(5px)',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'content',
// //           type: 'richText',
// //           label: 'Main Content',
// //           required: true,
// //         },
// //       ],
// //     },
// //     {
// //       name: 'sectionOrder',
// //       type: 'array',
// //       label: 'Section Order',
// //       admin: {
// //         description: 'Drag to reorder sections on the page',
// //       },
// //       fields: [
// //         {
// //           name: 'section',
// //           type: 'select',
// //           label: 'Section',
// //           required: true,
// //           options: [
// //             { label: 'Hero Section', value: 'hero' },
// //             { label: 'Banner Image Section', value: 'bannerImage' },
// //             { label: 'Content Section', value: 'content' },
// //           ],
// //         },
// //       ],
// //       defaultValue: [
// //         { section: 'hero' },
// //         { section: 'bannerImage' },
// //         { section: 'content' },

// //       ],
// //     },
// //     {
// //       name: 'globalStyles',
// //       type: 'group',
// //       label: 'Global Styles',
// //       fields: [
// //         {
// //           name: 'containerMaxWidth',
// //           type: 'text',
// //           label: 'Container Max Width',
// //           admin: {
// //             description: 'CSS max-width value (e.g., 1200px, 100%)',
// //           },
// //         },
// //         {
// //           name: 'containerPadding',
// //           type: 'text',
// //           label: 'Container Padding',
// //           admin: {
// //             description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
// //           },
// //         },
// //         {
// //           name: 'sectionSpacing',
// //           type: 'text',
// //           label: 'Section Spacing',
// //           admin: {
// //             description: 'Spacing between sections (e.g., 60px, 4rem)',
// //           },
// //         },
// //         {
// //           name: 'fontFamily',
// //           type: 'text',
// //           label: 'Font Family',
// //           admin: {
// //             description: 'CSS font-family value',
// //           },
// //         },
// //         {
// //           name: 'primaryColor',
// //           type: 'text',
// //           label: 'Primary Color',
// //           admin: {
// //             description: 'Primary brand color',
// //           },
// //         },
// //         {
// //           name: 'secondaryColor',
// //           type: 'text',
// //           label: 'Secondary Color',
// //           admin: {
// //             description: 'Secondary brand color',
// //           },
// //         },
// //         {
// //           name: 'accentColor',
// //           type: 'text',
// //           label: 'Accent Color',
// //           admin: {
// //             description: 'Accent color for highlights',
// //           },
// //         },
// //         {
// //           name: 'textColor',
// //           type: 'text',
// //           label: 'Default Text Color',
// //           admin: {
// //             description: 'Default text color for the page',
// //           },
// //         },
// //         {
// //           name: 'linkColor',
// //           type: 'text',
// //           label: 'Link Color',
// //           admin: {
// //             description: 'Default color for links',
// //           },
// //         },
// //         {
// //           name: 'linkHoverColor',
// //           type: 'text',
// //           label: 'Link Hover Color',
// //           admin: {
// //             description: 'Color for links on hover',
// //           },
// //         },
// //         {
// //           name: 'borderRadius',
// //           type: 'text',
// //           label: 'Default Border Radius',
// //           admin: {
// //             description: 'Default border radius for elements',
// //           },
// //         },
// //         {
// //           name: 'boxShadow',
// //           type: 'text',
// //           label: 'Default Box Shadow',
// //           admin: {
// //             description: 'Default box shadow for elements',
// //           },
// //         },
// //       ],
// //     },
// //     {
// //       name: 'typographySettings',
// //       type: 'group',
// //       label: 'Typography Settings',
// //       fields: [
// //         {
// //           name: 'h1FontSize',
// //           type: 'text',
// //           label: 'H1 Font Size',
// //           defaultValue: '56px',
// //         },
// //         {
// //           name: 'h1Color',
// //           type: 'text',
// //           label: 'H1 Color',
// //         },
// //         {
// //           name: 'h1FontWeight',
// //           type: 'text',
// //           label: 'H1 Font Weight',
// //           defaultValue: '700',
// //         },
// //         {
// //           name: 'h1LineHeight',
// //           type: 'text',
// //           label: 'H1 Line Height',
// //           defaultValue: '1.2',
// //         },
// //         {
// //           name: 'h1MarginBottom',
// //           type: 'text',
// //           label: 'H1 Margin Bottom',
// //         },
// //         {
// //           name: 'h2FontSize',
// //           type: 'text',
// //           label: 'H2 Font Size',
// //           defaultValue: '42px',
// //         },
// //         {
// //           name: 'h2Color',
// //           type: 'text',
// //           label: 'H2 Color',
// //         },
// //         {
// //           name: 'h2FontWeight',
// //           type: 'text',
// //           label: 'H2 Font Weight',
// //           defaultValue: '700',
// //         },
// //         {
// //           name: 'h2LineHeight',
// //           type: 'text',
// //           label: 'H2 Line Height',
// //           defaultValue: '1.3',
// //         },
// //         {
// //           name: 'h2MarginBottom',
// //           type: 'text',
// //           label: 'H2 Margin Bottom',
// //           defaultValue: '1.5rem',
// //         },
// //         {
// //           name: 'h3FontSize',
// //           type: 'text',
// //           label: 'H3 Font Size',
// //           defaultValue: '32px',
// //         },
// //         {
// //           name: 'h3Color',
// //           type: 'text',
// //           label: 'H3 Color',
// //         },
// //         {
// //           name: 'h3FontWeight',
// //           type: 'text',
// //           label: 'H3 Font Weight',
// //           defaultValue: '600',
// //         },
// //         {
// //           name: 'h3LineHeight',
// //           type: 'text',
// //           label: 'H3 Line Height',
// //           defaultValue: '1.4',
// //         },
// //         {
// //           name: 'h3MarginBottom',
// //           type: 'text',
// //           label: 'H3 Margin Bottom',
// //         },
// //         {
// //           name: 'h4FontSize',
// //           type: 'text',
// //           label: 'H4 Font Size',
// //           defaultValue: '24px',
// //         },
// //         {
// //           name: 'h4Color',
// //           type: 'text',
// //           label: 'H4 Color',
// //         },
// //         {
// //           name: 'h4FontWeight',
// //           type: 'text',
// //           label: 'H4 Font Weight',
// //           defaultValue: '600',
// //         },
// //         {
// //           name: 'bodyFontSize',
// //           type: 'text',
// //           label: 'Body Font Size',
// //           defaultValue: '16px',
// //         },
// //         {
// //           name: 'bodyLineHeight',
// //           type: 'text',
// //           label: 'Body Line Height',
// //           defaultValue: '1.6',
// //         },
// //         {
// //           name: 'paragraphSpacing',
// //           type: 'text',
// //           label: 'Paragraph Spacing',
// //           defaultValue: '1.5rem',
// //         },
// //         {
// //           name: 'listStyleType',
// //           type: 'text',
// //           label: 'List Style Type',
// //           admin: {
// //             description: 'CSS list-style-type (e.g., disc, circle, square)',
// //           },
// //           defaultValue: 'disc',
// //         },
// //         {
// //           name: 'listMarginLeft',
// //           type: 'text',
// //           label: 'List Margin Left',
// //           defaultValue: '2rem',
// //         },
// //         {
// //           name: 'listItemSpacing',
// //           type: 'text',
// //           label: 'List Item Spacing',
// //           defaultValue: '0.5rem',
// //         },
// //         {
// //           name: 'strongFontWeight',
// //           type: 'text',
// //           label: 'Strong/Bold Font Weight',
// //           defaultValue: '700',
// //         },
// //       ],
// //     },
// //     {
// //       name: 'layoutSettings',
// //       type: 'group',
// //       label: 'Layout Settings',
// //       fields: [
// //         {
// //           name: 'heroGridColumns',
// //           type: 'text',
// //           label: 'Hero Grid Columns',
// //           admin: {
// //             description: 'CSS grid columns for hero (e.g., 1fr 1fr)',
// //           },
// //         },
// //         {
// //           name: 'heroGridGap',
// //           type: 'text',
// //           label: 'Hero Grid Gap',
// //           defaultValue: '3rem',
// //         },
// //         {
// //           name: 'contentMaxWidth',
// //           type: 'text',
// //           label: 'Content Max Width',
// //           admin: {
// //             description: 'Max width for content section',
// //           },
// //         },
// //         {
// //           name: 'columnGap',
// //           type: 'text',
// //           label: 'Column Gap',
// //           admin: {
// //             description: 'Gap between columns (e.g., 30px, 2rem)',
// //           },
// //           defaultValue: '2rem',
// //         },
// //         {
// //           name: 'rowGap',
// //           type: 'text',
// //           label: 'Row Gap',
// //           admin: {
// //             description: 'Gap between rows (e.g., 20px, 1.5rem)',
// //           },
// //           defaultValue: '1.5rem',
// //         },
// //         {
// //           name: 'imageObjectFit',
// //           type: 'select',
// //           label: 'Image Object Fit',
// //           options: [
// //             { label: 'Cover', value: 'cover' },
// //             { label: 'Contain', value: 'contain' },
// //             { label: 'Fill', value: 'fill' },
// //             { label: 'None', value: 'none' },
// //           ],
// //           defaultValue: 'cover',
// //         },
// //         {
// //           name: 'imagePosition',
// //           type: 'text',
// //           label: 'Image Position',
// //           admin: {
// //             description: 'CSS background-position value',
// //           },
// //           defaultValue: 'center',
// //         },
// //         {
// //           name: 'widgetsLayout',
// //           type: 'select',
// //           label: 'Widgets Layout',
// //           options: [
// //             { label: 'Flex Row', value: 'flex-row' },
// //             { label: 'Flex Column', value: 'flex-column' },
// //             { label: 'Grid', value: 'grid' },
// //           ],
// //           defaultValue: 'flex-row',
// //         },
// //       ],
// //     },
// //     {
// //       name: 'animationSettings',
// //       type: 'group',
// //       label: 'Animation Settings',
// //       fields: [
// //         {
// //           name: 'enableAnimations',
// //           type: 'checkbox',
// //           label: 'Enable Animations',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'fadeInDuration',
// //           type: 'text',
// //           label: 'Fade In Duration',
// //           admin: {
// //             description: 'Duration for fade in animations (e.g., 1s, 2s)',
// //           },
// //           defaultValue: '0.8s',
// //         },
// //         {
// //           name: 'fadeInDelay',
// //           type: 'text',
// //           label: 'Fade In Delay',
// //           admin: {
// //             description: 'Delay before fade in starts (e.g., 0.2s)',
// //           },
// //           defaultValue: '0s',
// //         },
// //         {
// //           name: 'slideInDuration',
// //           type: 'text',
// //           label: 'Slide In Duration',
// //           admin: {
// //             description: 'Duration for slide animations',
// //           },
// //           defaultValue: '1s',
// //         },
// //         {
// //           name: 'slideInDistance',
// //           type: 'text',
// //           label: 'Slide In Distance',
// //           admin: {
// //             description: 'Distance elements slide from (e.g., 50px)',
// //           },
// //           defaultValue: '50px',
// //         },
// //         {
// //           name: 'hoverTransitionDuration',
// //           type: 'text',
// //           label: 'Hover Transition Duration',
// //           admin: {
// //             description: 'Duration for hover effects',
// //           },
// //           defaultValue: '0.3s',
// //         },
// //         {
// //           name: 'animationEasing',
// //           type: 'text',
// //           label: 'Animation Easing',
// //           admin: {
// //             description: 'CSS easing function',
// //           },
// //           defaultValue: 'ease-in-out',
// //         },
// //         {
// //           name: 'enableScrollAnimations',
// //           type: 'checkbox',
// //           label: 'Enable Scroll Animations',
// //           admin: {
// //             description: 'Enable scroll-triggered animations',
// //           },
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'scrollOffset',
// //           type: 'text',
// //           label: 'Scroll Animation Offset',
// //           admin: {
// //             description: 'Distance from viewport to trigger animation (px)',
// //           },
// //           defaultValue: '100',
// //         },
// //         {
// //           name: 'lineAnimationDuration',
// //           type: 'text',
// //           label: 'Line Animation Duration',
// //           admin: {
// //             description: 'Duration for horizontal line animation',
// //           },
// //           defaultValue: '1s',
// //         },
// //         {
// //           name: 'lineAnimationDelay',
// //           type: 'text',
// //           label: 'Line Animation Delay',
// //           defaultValue: '0.3s',
// //         },
// //         {
// //           name: 'buttonHoverScale',
// //           type: 'text',
// //           label: 'Button Hover Scale',
// //           admin: {
// //             description: 'Scale factor on button hover (e.g., 1.05)',
// //           },
// //           defaultValue: '1.05',
// //         },
// //       ],
// //     },
// //     {
// //       name: 'richTextStyles',
// //       type: 'group',
// //       label: 'Rich Text Content Styling',
// //       fields: [
// //         {
// //           name: 'figureMaxWidth',
// //           type: 'text',
// //           label: 'Figure Max Width',
// //           defaultValue: '1920px',
// //         },
// //         {
// //           name: 'figureMargin',
// //           type: 'text',
// //           label: 'Figure Margin',
// //           defaultValue: '2rem 0',
// //         },
// //         {
// //           name: 'imageMargin',
// //           type: 'text',
// //           label: 'Image Margin',
// //           defaultValue: '1rem 0',
// //         },
// //         {
// //           name: 'imageBorderRadius',
// //           type: 'text',
// //           label: 'Image Border Radius',
// //         },
// //         {
// //           name: 'videoAspectRatio',
// //           type: 'text',
// //           label: 'Video Aspect Ratio',
// //           admin: {
// //             description: 'Padding-bottom percentage for video containers',
// //           },
// //           defaultValue: '56.25%',
// //         },
// //         {
// //           name: 'blockquoteStyle',
// //           type: 'group',
// //           label: 'Blockquote Styling',
// //           fields: [
// //             {
// //               name: 'borderLeft',
// //               type: 'text',
// //               label: 'Border Left',
// //               defaultValue: '4px solid',
// //             },
// //             {
// //               name: 'padding',
// //               type: 'text',
// //               label: 'Padding',
// //               defaultValue: '1rem 1.5rem',
// //             },
// //             {
// //               name: 'fontStyle',
// //               type: 'text',
// //               label: 'Font Style',
// //               defaultValue: 'italic',
// //             },
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Background Color',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'codeBlockStyle',
// //           type: 'group',
// //           label: 'Code Block Styling',
// //           fields: [
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Background Color',
// //             },
// //             {
// //               name: 'padding',
// //               type: 'text',
// //               label: 'Padding',
// //               defaultValue: '1rem',
// //             },
// //             {
// //               name: 'borderRadius',
// //               type: 'text',
// //               label: 'Border Radius',
// //               defaultValue: '8px',
// //             },
// //             {
// //               name: 'fontFamily',
// //               type: 'text',
// //               label: 'Font Family',
// //               defaultValue: 'monospace',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: 'mobileSettings',
// //       type: 'group',
// //       label: 'Mobile Settings',
// //       fields: [
// //         {
// //           name: 'mobileBreakpoint',
// //           type: 'text',
// //           label: 'Mobile Breakpoint',
// //           admin: {
// //             description: 'Screen width for mobile (e.g., 767px)',
// //           },
// //           defaultValue: '767px',
// //         },
// //         {
// //           name: 'tabletBreakpoint',
// //           type: 'text',
// //           label: 'Tablet Breakpoint',
// //           admin: {
// //             description: 'Screen width for tablet (e.g., 991px)',
// //           },
// //           defaultValue: '991px',
// //         },
// //         {
// //           name: 'mobileTitleFontSize',
// //           type: 'text',
// //           label: 'Mobile Title Font Size',
// //           admin: {
// //             description: 'Font size adjustment for titles on mobile',
// //           },
// //         },
// //         {
// //           name: 'mobileDescriptionFontSize',
// //           type: 'text',
// //           label: 'Mobile Description Font Size',
// //         },
// //         {
// //           name: 'mobileFontSizeAdjustment',
// //           type: 'text',
// //           label: 'Mobile Font Size Adjustment',
// //           admin: {
// //             description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
// //           },
// //           defaultValue: '85%',
// //         },
// //         {
// //           name: 'mobileSpacingAdjustment',
// //           type: 'text',
// //           label: 'Mobile Spacing Adjustment',
// //           admin: {
// //             description: 'Percentage adjustment for mobile spacing',
// //           },
// //           defaultValue: '70%',
// //         },
// //         {
// //           name: 'mobileStackSections',
// //           type: 'checkbox',
// //           label: 'Stack Sections on Mobile',
// //           admin: {
// //             description: 'Automatically stack sections vertically on mobile devices',
// //           },
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'mobileHeroLayout',
// //           type: 'select',
// //           label: 'Mobile Hero Layout',
// //           options: [
// //             { label: 'Stack (Image Below)', value: 'stack-below' },
// //             { label: 'Stack (Image Above)', value: 'stack-above' },
// //             { label: 'Single Column', value: 'single-column' },
// //           ],
// //           defaultValue: 'stack-below',
// //         },
// //         {
// //           name: 'mobileWidgetsLayout',
// //           type: 'select',
// //           label: 'Mobile Widgets Layout',
// //           options: [
// //             { label: 'Stack Vertically', value: 'stack' },
// //             { label: 'Grid 2 Columns', value: 'grid-2' },
// //             { label: 'Horizontal Scroll', value: 'scroll' },
// //           ],
// //           defaultValue: 'stack',
// //         },
// //         {
// //           name: 'mobileCounterLayout',
// //           type: 'select',
// //           label: 'Mobile Counter Layout',
// //           options: [
// //             { label: 'Stack Vertically', value: 'stack' },
// //             { label: '2x2 Grid', value: 'grid-2x2' },
// //           ],
// //           defaultValue: 'stack',
// //         },
// //         {
// //           name: 'mobileHideElements',
// //           type: 'array',
// //           label: 'Hide Elements on Mobile',
// //           admin: {
// //             description: 'List of element classes to hide on mobile',
// //           },
// //           fields: [
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'CSS Class Name',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: 'seoSettings',
// //       type: 'group',
// //       label: 'SEO Settings',
// //       fields: [
// //         {
// //           name: 'metaTitle',
// //           type: 'text',
// //           label: 'Meta Title',
// //         },
// //         {
// //           name: 'metaDescription',
// //           type: 'textarea',
// //           label: 'Meta Description',
// //         },
// //         {
// //           name: 'ogImage',
// //           type: 'upload',
// //           relationTo: 'media',
// //           label: 'OG Image',
// //         },
// //         {
// //           name: 'ogImageUrl',
// //           type: 'text',
// //           label: 'OG Image URL (Fallback)',
// //         },
// //         {
// //           name: 'keywords',
// //           type: 'text',
// //           label: 'Keywords',
// //           admin: {
// //             description: 'Comma-separated keywords for SEO',
// //           },
// //         },
// //         {
// //           name: 'canonicalUrl',
// //           type: 'text',
// //           label: 'Canonical URL',
// //         },
// //         {
// //           name: 'robots',
// //           type: 'select',
// //           label: 'Robots Meta Tag',
// //           options: [
// //             { label: 'Index, Follow', value: 'index,follow' },
// //             { label: 'No Index, Follow', value: 'noindex,follow' },
// //             { label: 'Index, No Follow', value: 'index,nofollow' },
// //             { label: 'No Index, No Follow', value: 'noindex,nofollow' },
// //           ],
// //           defaultValue: 'index,follow',
// //         },
// //         {
// //           name: 'structuredData',
// //           type: 'textarea',
// //           label: 'Structured Data (JSON-LD)',
// //           admin: {
// //             description: 'Add schema.org structured data in JSON-LD format',
// //           },
// //         },
// //         {
// //           name: 'breadcrumbsEnabled',
// //           type: 'checkbox',
// //           label: 'Enable Breadcrumbs Schema',
// //           defaultValue: true,
// //         },
// //       ],
// //     },
// //     {
// //       name: 'accessibilitySettings',
// //       type: 'group',
// //       label: 'Accessibility Settings',
// //       fields: [
// //         {
// //           name: 'skipToContent',
// //           type: 'checkbox',
// //           label: 'Include Skip to Content Link',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'skipToContentTarget',
// //           type: 'text',
// //           label: 'Skip to Content Target ID',
// //           defaultValue: '#project-content',
// //         },
// //         {
// //           name: 'ariaLabelsEnabled',
// //           type: 'checkbox',
// //           label: 'Enable ARIA Labels',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'altTextRequired',
// //           type: 'checkbox',
// //           label: 'Require Alt Text for Images',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'focusVisibleColor',
// //           type: 'text',
// //           label: 'Focus Visible Color',
// //           admin: {
// //             description: 'Color for focus outlines (accessibility)',
// //           },
// //         },
// //         {
// //           name: 'focusVisibleWidth',
// //           type: 'text',
// //           label: 'Focus Visible Width',
// //           defaultValue: '2px',
// //         },
// //         {
// //           name: 'focusVisibleStyle',
// //           type: 'select',
// //           label: 'Focus Visible Style',
// //           options: [
// //             { label: 'Solid', value: 'solid' },
// //             { label: 'Dashed', value: 'dashed' },
// //             { label: 'Dotted', value: 'dotted' },
// //           ],
// //           defaultValue: 'solid',
// //         },
// //         {
// //           name: 'contrastMode',
// //           type: 'select',
// //           label: 'Contrast Mode',
// //           options: [
// //             { label: 'Normal', value: 'normal' },
// //             { label: 'High Contrast', value: 'high' },
// //             { label: 'Very High Contrast', value: 'very-high' },
// //           ],
// //           defaultValue: 'normal',
// //         },
// //         {
// //           name: 'keyboardNavigationEnabled',
// //           type: 'checkbox',
// //           label: 'Enhanced Keyboard Navigation',
// //           defaultValue: true,
// //         },
// //       ],
// //     },
// //     {
// //       name: 'performanceSettings',
// //       type: 'group',
// //       label: 'Performance Settings',
// //       fields: [
// //         {
// //           name: 'lazyLoadImages',
// //           type: 'checkbox',
// //           label: 'Enable Lazy Loading for Images',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'imageOptimization',
// //           type: 'checkbox',
// //           label: 'Enable Image Optimization',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'imageQuality',
// //           type: 'text',
// //           label: 'Image Quality',
// //           admin: {
// //             description: 'Compression quality (1-100)',
// //           },
// //           defaultValue: '85',
// //         },
// //         {
// //           name: 'imageFormat',
// //           type: 'select',
// //           label: 'Preferred Image Format',
// //           options: [
// //             { label: 'Auto (WebP with fallback)', value: 'auto' },
// //             { label: 'WebP', value: 'webp' },
// //             { label: 'AVIF', value: 'avif' },
// //             { label: 'JPEG', value: 'jpeg' },
// //             { label: 'PNG', value: 'png' },
// //           ],
// //           defaultValue: 'auto',
// //         },
// //         {
// //           name: 'responsiveImageSizes',
// //           type: 'text',
// //           label: 'Responsive Image Sizes',
// //           admin: {
// //             description: 'Comma-separated widths for responsive images',
// //           },
// //           defaultValue: '500,800,1080,1440,1920',
// //         },
// //         {
// //           name: 'preloadCriticalImages',
// //           type: 'checkbox',
// //           label: 'Preload Critical Images',
// //           admin: {
// //             description: 'Preload hero and above-the-fold images',
// //           },
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'minifyCSS',
// //           type: 'checkbox',
// //           label: 'Minify CSS',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'minifyJS',
// //           type: 'checkbox',
// //           label: 'Minify JavaScript',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'enableCDN',
// //           type: 'checkbox',
// //           label: 'Use CDN for Assets',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'cdnUrl',
// //           type: 'text',
// //           label: 'CDN Base URL',
// //           admin: {
// //             description: 'Base URL for CDN',
// //           },
// //         },
// //       ],
// //     },
// //     {
// //       name: 'advancedSettings',
// //       type: 'group',
// //       label: 'Advanced Settings',
// //       fields: [
// //         {
// //           name: 'customCSS',
// //           type: 'textarea',
// //           label: 'Custom CSS',
// //           admin: {
// //             description: 'Add custom CSS styles for this component',
// //           },
// //         },
// //         {
// //           name: 'customJS',
// //           type: 'textarea',
// //           label: 'Custom JavaScript',
// //           admin: {
// //             description: 'Add custom JavaScript code for this component',
// //           },
// //         },
// //         {
// //           name: 'dataAttributes',
// //           type: 'array',
// //           label: 'Custom Data Attributes',
// //           admin: {
// //             description: 'Add custom data attributes to sections',
// //           },
// //           fields: [
// //             {
// //               name: 'attribute',
// //               type: 'text',
// //               label: 'Attribute Name',
// //               admin: {
// //                 description: 'e.g., data-tracking-id',
// //               },
// //             },
// //             {
// //               name: 'value',
// //               type: 'text',
// //               label: 'Attribute Value',
// //             },
// //             {
// //               name: 'targetSection',
// //               type: 'select',
// //               label: 'Apply To Section',
// //               options: [
// //                 { label: 'Hero Section', value: 'hero' },
// //                 { label: 'Banner Image Section', value: 'bannerImage' },
// //                 { label: 'Content Section', value: 'content' },
// //                 { label: 'Counter Section', value: 'counter' },
// //               ],
// //             },
// //           ],
// //         },
// //         {
// //           name: 'enableCaching',
// //           type: 'checkbox',
// //           label: 'Enable Component Caching',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'cacheTimeout',
// //           type: 'text',
// //           label: 'Cache Timeout (seconds)',
// //           defaultValue: '3600',
// //         },
// //       ],
// //     },
// //     {
// //       name: 'integrationSettings',
// //       type: 'group',
// //       label: 'Integration Settings',
// //       fields: [
// //         {
// //           name: 'googleAnalyticsId',
// //           type: 'text',
// //           label: 'Google Analytics ID',
// //           admin: {
// //             description: 'GA tracking ID for this component',
// //           },
// //         },
// //         {
// //           name: 'facebookPixelId',
// //           type: 'text',
// //           label: 'Facebook Pixel ID',
// //         },
// //         {
// //           name: 'trackingEnabled',
// //           type: 'checkbox',
// //           label: 'Enable Tracking',
// //           defaultValue: false,
// //         },
// //         {
// //           name: 'trackingEvents',
// //           type: 'array',
// //           label: 'Tracking Events',
// //           admin: {
// //             description: 'Define custom tracking events',
// //           },
// //           fields: [
// //             {
// //               name: 'eventName',
// //               type: 'text',
// //               label: 'Event Name',
// //               required: true,
// //             },
// //             {
// //               name: 'trigger',
// //               type: 'select',
// //               label: 'Trigger',
// //               options: [
// //                 { label: 'Page Load', value: 'load' },
// //                 { label: 'Link Click', value: 'click' },
// //                 { label: 'Scroll to Section', value: 'scroll' },
// //                 { label: 'Button Click', value: 'button-click' },
// //               ],
// //             },
// //             {
// //               name: 'targetElement',
// //               type: 'text',
// //               label: 'Target Element',
// //               admin: {
// //                 description: 'CSS selector for the target element',
// //               },
// //             },
// //           ],
// //         },
// //         {
// //           name: 'conversionTrackingEnabled',
// //           type: 'checkbox',
// //           label: 'Enable Conversion Tracking',
// //           defaultValue: false,
// //         },
// //       ],
// //     },
// //     {
// //       name: 'isActive',
// //       type: 'checkbox',
// //       label: 'Active',
// //       defaultValue: true,
// //       admin: {
// //         description: 'Toggle to enable/disable this component',
// //       },
// //     },
// //   ],
// //   timestamps: true,
// // }

// import { CollectionConfig } from 'payload'

// export const ProjectDetailsComponents: CollectionConfig = {
//   slug: 'project-details-component',
//   admin: {
//     useAsTitle: 'componentName',
//     defaultColumns: ['componentName', 'heroSection.title', 'updatedAt'],
//     group: 'Components',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'componentName',
//       type: 'text',
//       required: true,
//       defaultValue: 'Project Details Component',
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       label: 'URL Slug',
//       unique: true,
//       required: true,
//       admin: {
//         position: 'sidebar',
//         description: 'Used in URL: /projects/your-slug-here',
//       },
//       hooks: {
//         beforeValidate: [
//           ({ data, originalDoc }) => {
//             if (!data.slug && data.heroSection?.title) {
//               return data.heroSection.title
//                 .toLowerCase()
//                 .replace(/[^a-z0-9]+/g, '-')
//                 .replace(/^-+|-+$/g, '')
//             }
//             return data.slug
//           },
//         ],
//       },
//     },
//     {
//       name: 'heroSection',
//       type: 'group',
//       label: 'Hero Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'padding',
//           type: 'group',
//           label: 'Padding',
//           fields: [
//             {
//               name: 'top',
//               type: 'text',
//               label: 'Padding Top',
//             },
//             {
//               name: 'bottom',
//               type: 'text',
//               label: 'Padding Bottom',
//             },
//             {
//               name: 'left',
//               type: 'text',
//               label: 'Padding Left',
//             },
//             {
//               name: 'right',
//               type: 'text',
//               label: 'Padding Right',
//             },
//           ],
//         },
//         {
//           name: 'titleBlock',
//           type: 'group',
//           label: 'Title Block',
//           fields: [
//             {
//               name: 'title',
//               type: 'text',
//               label: 'Project Title',
//               required: true,
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Title Color',
//             },
//             {
//               name: 'titleFontSize',
//               type: 'text',
//               label: 'Title Font Size',
//             },
//             {
//               name: 'titleFontWeight',
//               type: 'text',
//               label: 'Title Font Weight',
//             },
//             {
//               name: 'titleLineHeight',
//               type: 'text',
//               label: 'Title Line Height',
//             },
//             {
//               name: 'titleAnimation',
//               type: 'text',
//               label: 'Title Animation Attribute',
//             },
//             {
//               name: 'showHorizontalLine',
//               type: 'checkbox',
//               label: 'Show Horizontal Line',
//               defaultValue: true,
//             },
//             {
//               name: 'lineClassName',
//               type: 'text',
//               label: 'Line CSS Classes',
//             },
//             {
//               name: 'lineColor',
//               type: 'text',
//               label: 'Line Color',
//             },
//             {
//               name: 'lineHeight',
//               type: 'text',
//               label: 'Line Height',
//             },
//             {
//               name: 'lineAnimationWidth',
//               type: 'text',
//               label: 'Line Animation Width',
//               admin: {
//                 description: 'Final width percentage (e.g., 100%)',
//               },
//             },
//           ],
//         },
//         {
//           name: 'descriptionBlock',
//           type: 'group',
//           label: 'Description Block',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Description Block',
//               defaultValue: true,
//             },
//             {
//               name: 'description',
//               type: 'textarea',
//               label: 'Description',
//             },
//             {
//               name: 'descriptionColor',
//               type: 'text',
//               label: 'Description Color',
//             },
//             {
//               name: 'descriptionFontSize',
//               type: 'text',
//               label: 'Description Font Size',
//             },
//             {
//               name: 'descriptionLineHeight',
//               type: 'text',
//               label: 'Description Line Height',
//             },
//             {
//               name: 'animationTransform',
//               type: 'text',
//               label: 'Initial Animation Transform',
//             },
//             {
//               name: 'animationOpacity',
//               type: 'text',
//               label: 'Initial Animation Opacity',
//             },
//             {
//               name: 'animationBlur',
//               type: 'text',
//               label: 'Initial Animation Blur',
//             },
//           ],
//         },
//         {
//           name: 'button',
//           type: 'group',
//           label: 'CTA Button',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Button',
//               defaultValue: true,
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//             },
//             {
//               name: 'openInNewTab',
//               type: 'checkbox',
//               label: 'Open in New Tab',
//               defaultValue: false,
//             },
//             {
//               name: 'icon',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Button Icon',
//             },
//             {
//               name: 'iconUrl',
//               type: 'text',
//               label: 'Button Icon URL (Fallback)',
//             },
//             {
//               name: 'iconAlt',
//               type: 'text',
//               label: 'Icon Alt Text',
//             },
//             {
//               name: 'variant',
//               type: 'text',
//               label: 'Button Variant',
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Button CSS Classes',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Button Background Color',
//             },
//             {
//               name: 'hoverBackgroundColor',
//               type: 'text',
//               label: 'Hover Background Color',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Button Text Color',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Button Border Radius',
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Button Padding',
//             },
//           ],
//         },
//         {
//           name: 'widgets',
//           type: 'array',
//           label: 'Info Widgets',
//           admin: {
//             description: 'Drag to reorder widgets (Client, Industry, Services, etc.)',
//           },
//           fields: [
//             {
//               name: 'type',
//               type: 'text',
//               label: 'Widget Type',
//               required: true,
//             },
//             {
//               name: 'name',
//               type: 'text',
//               label: 'Widget Name',
//               required: true,
//             },
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Widget',
//               defaultValue: true,
//             },
//             {
//               name: 'typeColor',
//               type: 'text',
//               label: 'Type Text Color',
//             },
//             {
//               name: 'typeFontSize',
//               type: 'text',
//               label: 'Type Font Size',
//             },
//             {
//               name: 'nameColor',
//               type: 'text',
//               label: 'Name Text Color',
//             },
//             {
//               name: 'nameFontSize',
//               type: 'text',
//               label: 'Name Font Size',
//             },
//             {
//               name: 'nameFontWeight',
//               type: 'text',
//               label: 'Name Font Weight',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Widget Background Color',
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Widget Padding',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Widget Border Radius',
//             },
//           ],
//         },
//         {
//           name: 'widgetsBlockStyles',
//           type: 'group',
//           label: 'Widgets Block Styling',
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Widgets Block Background',
//             },
//             {
//               name: 'gap',
//               type: 'text',
//               label: 'Gap Between Widgets',
//             },
//             {
//               name: 'marginTop',
//               type: 'text',
//               label: 'Margin Top',
//             },
//             {
//               name: 'animationTransform',
//               type: 'text',
//               label: 'Initial Animation Transform',
//             },
//             {
//               name: 'animationOpacity',
//               type: 'text',
//               label: 'Initial Animation Opacity',
//             },
//             {
//               name: 'animationBlur',
//               type: 'text',
//               label: 'Initial Animation Blur',
//             },
//           ],
//         },
//         {
//           name: 'heroImage',
//           type: 'group',
//           label: 'Hero Image',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Hero Image',
//               defaultValue: true,
//             },
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Hero Image',
//             },
//             {
//               name: 'imageUrl',
//               type: 'text',
//               label: 'Hero Image URL (Fallback)',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Image Alt Text',
//             },
//             {
//               name: 'responsiveImages',
//               type: 'group',
//               label: 'Responsive Images',
//               fields: [
//                 {
//                   name: 'mobile',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Mobile Image (500px)',
//                 },
//                 {
//                   name: 'mobileUrl',
//                   type: 'text',
//                   label: 'Mobile Image URL',
//                 },
//               ],
//             },
//             {
//               name: 'sizes',
//               type: 'text',
//               label: 'Responsive Sizes Attribute',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Image Border Radius',
//             },
//             {
//               name: 'boxShadow',
//               type: 'text',
//               label: 'Image Box Shadow',
//             },
//             {
//               name: 'animationOpacity',
//               type: 'text',
//               label: 'Initial Animation Opacity',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'bannerImageSection',
//       type: 'group',
//       label: 'Banner Image Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'padding',
//           type: 'group',
//           label: 'Padding',
//           fields: [
//             {
//               name: 'top',
//               type: 'text',
//               label: 'Padding Top',
//             },
//             {
//               name: 'bottom',
//               type: 'text',
//               label: 'Padding Bottom',
//             },
//           ],
//         },
//         {
//           name: 'marginTop',
//           type: 'text',
//           label: 'Margin Top',
//         },
//         {
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom',
//         },
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Banner Image',
//         },
//         {
//           name: 'imageUrl',
//           type: 'text',
//           label: 'Banner Image URL (Fallback)',
//         },
//         {
//           name: 'alt',
//           type: 'text',
//           label: 'Image Alt Text',
//         },
//         {
//           name: 'responsiveImages',
//           type: 'group',
//           label: 'Responsive Images',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (500px)',
//             },
//             {
//               name: 'mobileUrl',
//               type: 'text',
//               label: 'Mobile Image URL',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (800px)',
//             },
//             {
//               name: 'tabletUrl',
//               type: 'text',
//               label: 'Tablet Image URL',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (1080px)',
//             },
//             {
//               name: 'desktopUrl',
//               type: 'text',
//               label: 'Desktop Image URL',
//             },
//           ],
//         },
//         {
//           name: 'sizes',
//           type: 'text',
//           label: 'Responsive Sizes Attribute',
//         },
//         {
//           name: 'borderRadius',
//           type: 'text',
//           label: 'Image Border Radius',
//         },
//         {
//           name: 'animationOpacity',
//           type: 'text',
//           label: 'Initial Animation Opacity',
//         },
//         {
//           name: 'maxWidth',
//           type: 'text',
//           label: 'Max Width',
//         },
//       ],
//     },
//     {
//       name: 'contentSection',
//       type: 'group',
//       label: 'Content Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'padding',
//           type: 'group',
//           label: 'Padding',
//           fields: [
//             {
//               name: 'top',
//               type: 'text',
//               label: 'Padding Top',
//             },
//             {
//               name: 'bottom',
//               type: 'text',
//               label: 'Padding Bottom',
//             },
//             {
//               name: 'left',
//               type: 'text',
//               label: 'Padding Left',
//             },
//             {
//               name: 'right',
//               type: 'text',
//               label: 'Padding Right',
//             },
//           ],
//         },
//         {
//           name: 'marginTop',
//           type: 'text',
//           label: 'Margin Top',
//         },
//         {
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom',
//         },
//         {
//           name: 'richTextWrapper',
//           type: 'group',
//           label: 'Rich Text Wrapper Styling',
//           fields: [
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Wrapper CSS Classes',
//             },
//             {
//               name: 'maxWidth',
//               type: 'text',
//               label: 'Max Width',
//             },
//             {
//               name: 'animationTransform',
//               type: 'text',
//               label: 'Initial Animation Transform',
//             },
//             {
//               name: 'animationOpacity',
//               type: 'text',
//               label: 'Initial Animation Opacity',
//             },
//             {
//               name: 'animationBlur',
//               type: 'text',
//               label: 'Initial Animation Blur',
//             },
//           ],
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Main Content',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'sectionOrder',
//       type: 'array',
//       label: 'Section Order',
//       admin: {
//         description: 'Drag to reorder sections on the page',
//       },
//       fields: [
//         {
//           name: 'section',
//           type: 'select',
//           label: 'Section',
//           required: true,
//           options: [
//             { label: 'Hero Section', value: 'hero' },
//             { label: 'Banner Image Section', value: 'bannerImage' },
//             { label: 'Content Section', value: 'content' },
//           ],
//         },
//       ],
//       defaultValue: [{ section: 'hero' }, { section: 'bannerImage' }, { section: 'content' }],
//     },
//     {
//       name: 'globalStyles',
//       type: 'group',
//       label: 'Global Styles',
//       fields: [
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           label: 'Container Max Width',
//           admin: {
//             description: 'CSS max-width value (e.g., 1200px, 100%)',
//           },
//         },
//         {
//           name: 'containerPadding',
//           type: 'text',
//           label: 'Container Padding',
//           admin: {
//             description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
//           },
//         },
//         {
//           name: 'sectionSpacing',
//           type: 'text',
//           label: 'Section Spacing',
//           admin: {
//             description: 'Spacing between sections (e.g., 60px, 4rem)',
//           },
//         },
//         {
//           name: 'fontFamily',
//           type: 'text',
//           label: 'Font Family',
//           admin: {
//             description: 'CSS font-family value',
//           },
//         },
//         {
//           name: 'primaryColor',
//           type: 'text',
//           label: 'Primary Color',
//           admin: {
//             description: 'Primary brand color',
//           },
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
//           admin: {
//             description: 'Secondary brand color',
//           },
//         },
//         {
//           name: 'accentColor',
//           type: 'text',
//           label: 'Accent Color',
//           admin: {
//             description: 'Accent color for highlights',
//           },
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Default Text Color',
//           admin: {
//             description: 'Default text color for the page',
//           },
//         },
//         {
//           name: 'linkColor',
//           type: 'text',
//           label: 'Link Color',
//           admin: {
//             description: 'Default color for links',
//           },
//         },
//         {
//           name: 'linkHoverColor',
//           type: 'text',
//           label: 'Link Hover Color',
//           admin: {
//             description: 'Color for links on hover',
//           },
//         },
//         {
//           name: 'borderRadius',
//           type: 'text',
//           label: 'Default Border Radius',
//           admin: {
//             description: 'Default border radius for elements',
//           },
//         },
//         {
//           name: 'boxShadow',
//           type: 'text',
//           label: 'Default Box Shadow',
//           admin: {
//             description: 'Default box shadow for elements',
//           },
//         },
//       ],
//     },
//     {
//       name: 'typographySettings',
//       type: 'group',
//       label: 'Typography Settings',
//       fields: [
//         {
//           name: 'h1FontSize',
//           type: 'text',
//           label: 'H1 Font Size',
//         },
//         {
//           name: 'h1Color',
//           type: 'text',
//           label: 'H1 Color',
//         },
//         {
//           name: 'h1FontWeight',
//           type: 'text',
//           label: 'H1 Font Weight',
//         },
//         {
//           name: 'h1LineHeight',
//           type: 'text',
//           label: 'H1 Line Height',
//         },
//         {
//           name: 'h1MarginBottom',
//           type: 'text',
//           label: 'H1 Margin Bottom',
//         },
//         {
//           name: 'h2FontSize',
//           type: 'text',
//           label: 'H2 Font Size',
//         },
//         {
//           name: 'h2Color',
//           type: 'text',
//           label: 'H2 Color',
//         },
//         {
//           name: 'h2FontWeight',
//           type: 'text',
//           label: 'H2 Font Weight',
//         },
//         {
//           name: 'h2LineHeight',
//           type: 'text',
//           label: 'H2 Line Height',
//         },
//         {
//           name: 'h2MarginBottom',
//           type: 'text',
//           label: 'H2 Margin Bottom',
//         },
//         {
//           name: 'h3FontSize',
//           type: 'text',
//           label: 'H3 Font Size',
//         },
//         {
//           name: 'h3Color',
//           type: 'text',
//           label: 'H3 Color',
//         },
//         {
//           name: 'h3FontWeight',
//           type: 'text',
//           label: 'H3 Font Weight',
//         },
//         {
//           name: 'h3LineHeight',
//           type: 'text',
//           label: 'H3 Line Height',
//         },
//         {
//           name: 'h3MarginBottom',
//           type: 'text',
//           label: 'H3 Margin Bottom',
//         },
//         {
//           name: 'h4FontSize',
//           type: 'text',
//           label: 'H4 Font Size',
//         },
//         {
//           name: 'h4Color',
//           type: 'text',
//           label: 'H4 Color',
//         },
//         {
//           name: 'h4FontWeight',
//           type: 'text',
//           label: 'H4 Font Weight',
//         },
//         {
//           name: 'bodyFontSize',
//           type: 'text',
//           label: 'Body Font Size',
//         },
//         {
//           name: 'bodyLineHeight',
//           type: 'text',
//           label: 'Body Line Height',
//         },
//         {
//           name: 'paragraphSpacing',
//           type: 'text',
//           label: 'Paragraph Spacing',
//         },
//         {
//           name: 'listStyleType',
//           type: 'text',
//           label: 'List Style Type',
//           admin: {
//             description: 'CSS list-style-type (e.g., disc, circle, square)',
//           },
//         },
//         {
//           name: 'listMarginLeft',
//           type: 'text',
//           label: 'List Margin Left',
//         },
//         {
//           name: 'listItemSpacing',
//           type: 'text',
//           label: 'List Item Spacing',
//         },
//         {
//           name: 'strongFontWeight',
//           type: 'text',
//           label: 'Strong/Bold Font Weight',
//         },
//       ],
//     },
//     {
//       name: 'layoutSettings',
//       type: 'group',
//       label: 'Layout Settings',
//       fields: [
//         {
//           name: 'heroGridColumns',
//           type: 'text',
//           label: 'Hero Grid Columns',
//           admin: {
//             description: 'CSS grid columns for hero (e.g., 1fr 1fr)',
//           },
//         },
//         {
//           name: 'heroGridGap',
//           type: 'text',
//           label: 'Hero Grid Gap',
//         },
//         {
//           name: 'contentMaxWidth',
//           type: 'text',
//           label: 'Content Max Width',
//           admin: {
//             description: 'Max width for content section',
//           },
//         },
//         {
//           name: 'columnGap',
//           type: 'text',
//           label: 'Column Gap',
//           admin: {
//             description: 'Gap between columns (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'rowGap',
//           type: 'text',
//           label: 'Row Gap',
//           admin: {
//             description: 'Gap between rows (e.g., 20px, 1.5rem)',
//           },
//         },
//         {
//           name: 'imageObjectFit',
//           type: 'select',
//           label: 'Image Object Fit',
//           options: [
//             { label: 'Cover', value: 'cover' },
//             { label: 'Contain', value: 'contain' },
//             { label: 'Fill', value: 'fill' },
//             { label: 'None', value: 'none' },
//           ],
//           defaultValue: 'cover',
//         },
//         {
//           name: 'imagePosition',
//           type: 'text',
//           label: 'Image Position',
//           admin: {
//             description: 'CSS background-position value',
//           },
//         },
//         {
//           name: 'widgetsLayout',
//           type: 'select',
//           label: 'Widgets Layout',
//           options: [
//             { label: 'Flex Row', value: 'flex-row' },
//             { label: 'Flex Column', value: 'flex-column' },
//             { label: 'Grid', value: 'grid' },
//           ],
//           defaultValue: 'flex-row',
//         },
//       ],
//     },
//     {
//       name: 'animationSettings',
//       type: 'group',
//       label: 'Animation Settings',
//       fields: [
//         {
//           name: 'enableAnimations',
//           type: 'checkbox',
//           label: 'Enable Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'fadeInDuration',
//           type: 'text',
//           label: 'Fade In Duration',
//           admin: {
//             description: 'Duration for fade in animations (e.g., 1s, 2s)',
//           },
//         },
//         {
//           name: 'fadeInDelay',
//           type: 'text',
//           label: 'Fade In Delay',
//           admin: {
//             description: 'Delay before fade in starts (e.g., 0.2s)',
//           },
//         },
//         {
//           name: 'slideInDuration',
//           type: 'text',
//           label: 'Slide In Duration',
//           admin: {
//             description: 'Duration for slide animations',
//           },
//         },
//         {
//           name: 'slideInDistance',
//           type: 'text',
//           label: 'Slide In Distance',
//           admin: {
//             description: 'Distance elements slide from (e.g., 50px)',
//           },
//         },
//         {
//           name: 'hoverTransitionDuration',
//           type: 'text',
//           label: 'Hover Transition Duration',
//           admin: {
//             description: 'Duration for hover effects',
//           },
//         },
//         {
//           name: 'animationEasing',
//           type: 'text',
//           label: 'Animation Easing',
//           admin: {
//             description: 'CSS easing function',
//           },
//         },
//         {
//           name: 'enableScrollAnimations',
//           type: 'checkbox',
//           label: 'Enable Scroll Animations',
//           admin: {
//             description: 'Enable scroll-triggered animations',
//           },
//           defaultValue: true,
//         },
//         {
//           name: 'scrollOffset',
//           type: 'text',
//           label: 'Scroll Animation Offset',
//           admin: {
//             description: 'Distance from viewport to trigger animation (px)',
//           },
//         },
//         {
//           name: 'lineAnimationDuration',
//           type: 'text',
//           label: 'Line Animation Duration',
//           admin: {
//             description: 'Duration for horizontal line animation',
//           },
//         },
//         {
//           name: 'lineAnimationDelay',
//           type: 'text',
//           label: 'Line Animation Delay',
//         },
//         {
//           name: 'buttonHoverScale',
//           type: 'text',
//           label: 'Button Hover Scale',
//           admin: {
//             description: 'Scale factor on button hover (e.g., 1.05)',
//           },
//         },
//       ],
//     },
//     {
//       name: 'richTextStyles',
//       type: 'group',
//       label: 'Rich Text Content Styling',
//       fields: [
//         {
//           name: 'figureMaxWidth',
//           type: 'text',
//           label: 'Figure Max Width',
//         },
//         {
//           name: 'figureMargin',
//           type: 'text',
//           label: 'Figure Margin',
//         },
//         {
//           name: 'imageMargin',
//           type: 'text',
//           label: 'Image Margin',
//         },
//         {
//           name: 'imageBorderRadius',
//           type: 'text',
//           label: 'Image Border Radius',
//         },
//         {
//           name: 'videoAspectRatio',
//           type: 'text',
//           label: 'Video Aspect Ratio',
//           admin: {
//             description: 'Padding-bottom percentage for video containers',
//           },
//         },
//         {
//           name: 'blockquoteStyle',
//           type: 'group',
//           label: 'Blockquote Styling',
//           fields: [
//             {
//               name: 'borderLeft',
//               type: 'text',
//               label: 'Border Left',
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Padding',
//             },
//             {
//               name: 'fontStyle',
//               type: 'text',
//               label: 'Font Style',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//             },
//           ],
//         },
//         {
//           name: 'codeBlockStyle',
//           type: 'group',
//           label: 'Code Block Styling',
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Padding',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Border Radius',
//             },
//             {
//               name: 'fontFamily',
//               type: 'text',
//               label: 'Font Family',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'mobileSettings',
//       type: 'group',
//       label: 'Mobile Settings',
//       fields: [
//         {
//           name: 'mobileBreakpoint',
//           type: 'text',
//           label: 'Mobile Breakpoint',
//           admin: {
//             description: 'Screen width for mobile (e.g., 767px)',
//           },
//         },
//         {
//           name: 'tabletBreakpoint',
//           type: 'text',
//           label: 'Tablet Breakpoint',
//           admin: {
//             description: 'Screen width for tablet (e.g., 991px)',
//           },
//         },
//         {
//           name: 'mobileTitleFontSize',
//           type: 'text',
//           label: 'Mobile Title Font Size',
//           admin: {
//             description: 'Font size adjustment for titles on mobile',
//           },
//         },
//         {
//           name: 'mobileDescriptionFontSize',
//           type: 'text',
//           label: 'Mobile Description Font Size',
//         },
//         {
//           name: 'mobileFontSizeAdjustment',
//           type: 'text',
//           label: 'Mobile Font Size Adjustment',
//           admin: {
//             description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
//           },
//         },
//         {
//           name: 'mobileSpacingAdjustment',
//           type: 'text',
//           label: 'Mobile Spacing Adjustment',
//           admin: {
//             description: 'Percentage adjustment for mobile spacing',
//           },
//         },
//         {
//           name: 'mobileStackSections',
//           type: 'checkbox',
//           label: 'Stack Sections on Mobile',
//           admin: {
//             description: 'Automatically stack sections vertically on mobile devices',
//           },
//           defaultValue: true,
//         },
//         {
//           name: 'mobileHeroLayout',
//           type: 'select',
//           label: 'Mobile Hero Layout',
//           options: [
//             { label: 'Stack (Image Below)', value: 'stack-below' },
//             { label: 'Stack (Image Above)', value: 'stack-above' },
//             { label: 'Single Column', value: 'single-column' },
//           ],
//           defaultValue: 'stack-below',
//         },
//         {
//           name: 'mobileWidgetsLayout',
//           type: 'select',
//           label: 'Mobile Widgets Layout',
//           options: [
//             { label: 'Stack Vertically', value: 'stack' },
//             { label: 'Grid 2 Columns', value: 'grid-2' },
//             { label: 'Horizontal Scroll', value: 'scroll' },
//           ],
//           defaultValue: 'stack',
//         },
//         {
//           name: 'mobileCounterLayout',
//           type: 'select',
//           label: 'Mobile Counter Layout',
//           options: [
//             { label: 'Stack Vertically', value: 'stack' },
//             { label: '2x2 Grid', value: 'grid-2x2' },
//           ],
//           defaultValue: 'stack',
//         },
//         {
//           name: 'mobileHideElements',
//           type: 'array',
//           label: 'Hide Elements on Mobile',
//           admin: {
//             description: 'List of element classes to hide on mobile',
//           },
//           fields: [
//             {
//               name: 'className',
//               type: 'text',
//               label: 'CSS Class Name',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'seoSettings',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           label: 'Meta Title',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'OG Image',
//         },
//         {
//           name: 'ogImageUrl',
//           type: 'text',
//           label: 'OG Image URL (Fallback)',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//           admin: {
//             description: 'Comma-separated keywords for SEO',
//           },
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//         },
//         {
//           name: 'robots',
//           type: 'select',
//           label: 'Robots Meta Tag',
//           options: [
//             { label: 'Index, Follow', value: 'index,follow' },
//             { label: 'No Index, Follow', value: 'noindex,follow' },
//             { label: 'Index, No Follow', value: 'index,nofollow' },
//             { label: 'No Index, No Follow', value: 'noindex,nofollow' },
//           ],
//           defaultValue: 'index,follow',
//         },
//         {
//           name: 'structuredData',
//           type: 'textarea',
//           label: 'Structured Data (JSON-LD)',
//           admin: {
//             description: 'Add schema.org structured data in JSON-LD format',
//           },
//         },
//         {
//           name: 'breadcrumbsEnabled',
//           type: 'checkbox',
//           label: 'Enable Breadcrumbs Schema',
//           defaultValue: true,
//         },
//       ],
//     },
//     {
//       name: 'accessibilitySettings',
//       type: 'group',
//       label: 'Accessibility Settings',
//       fields: [
//         {
//           name: 'skipToContent',
//           type: 'checkbox',
//           label: 'Include Skip to Content Link',
//           defaultValue: true,
//         },
//         {
//           name: 'skipToContentTarget',
//           type: 'text',
//           label: 'Skip to Content Target ID',
//         },
//         {
//           name: 'ariaLabelsEnabled',
//           type: 'checkbox',
//           label: 'Enable ARIA Labels',
//           defaultValue: true,
//         },
//         {
//           name: 'altTextRequired',
//           type: 'checkbox',
//           label: 'Require Alt Text for Images',
//           defaultValue: true,
//         },
//         {
//           name: 'focusVisibleColor',
//           type: 'text',
//           label: 'Focus Visible Color',
//           admin: {
//             description: 'Color for focus outlines (accessibility)',
//           },
//         },
//         {
//           name: 'focusVisibleWidth',
//           type: 'text',
//           label: 'Focus Visible Width',
//         },
//         {
//           name: 'focusVisibleStyle',
//           type: 'select',
//           label: 'Focus Visible Style',
//           options: [
//             { label: 'Solid', value: 'solid' },
//             { label: 'Dashed', value: 'dashed' },
//             { label: 'Dotted', value: 'dotted' },
//           ],
//           defaultValue: 'solid',
//         },
//         {
//           name: 'contrastMode',
//           type: 'select',
//           label: 'Contrast Mode',
//           options: [
//             { label: 'Normal', value: 'normal' },
//             { label: 'High Contrast', value: 'high' },
//             { label: 'Very High Contrast', value: 'very-high' },
//           ],
//           defaultValue: 'normal',
//         },
//         {
//           name: 'keyboardNavigationEnabled',
//           type: 'checkbox',
//           label: 'Enhanced Keyboard Navigation',
//           defaultValue: true,
//         },
//       ],
//     },
//     {
//       name: 'performanceSettings',
//       type: 'group',
//       label: 'Performance Settings',
//       fields: [
//         {
//           name: 'lazyLoadImages',
//           type: 'checkbox',
//           label: 'Enable Lazy Loading for Images',
//           defaultValue: true,
//         },
//         {
//           name: 'imageOptimization',
//           type: 'checkbox',
//           label: 'Enable Image Optimization',
//           defaultValue: true,
//         },
//         {
//           name: 'imageQuality',
//           type: 'text',
//           label: 'Image Quality',
//           admin: {
//             description: 'Compression quality (1-100)',
//           },
//         },
//         {
//           name: 'imageFormat',
//           type: 'select',
//           label: 'Preferred Image Format',
//           options: [
//             { label: 'Auto (WebP with fallback)', value: 'auto' },
//             { label: 'WebP', value: 'webp' },
//             { label: 'AVIF', value: 'avif' },
//             { label: 'JPEG', value: 'jpeg' },
//             { label: 'PNG', value: 'png' },
//           ],
//           defaultValue: 'auto',
//         },
//         {
//           name: 'responsiveImageSizes',
//           type: 'text',
//           label: 'Responsive Image Sizes',
//           admin: {
//             description: 'Comma-separated widths for responsive images',
//           },
//         },
//         {
//           name: 'preloadCriticalImages',
//           type: 'checkbox',
//           label: 'Preload Critical Images',
//           admin: {
//             description: 'Preload hero and above-the-fold images',
//           },
//           defaultValue: true,
//         },
//         {
//           name: 'minifyCSS',
//           type: 'checkbox',
//           label: 'Minify CSS',
//           defaultValue: true,
//         },
//         {
//           name: 'minifyJS',
//           type: 'checkbox',
//           label: 'Minify JavaScript',
//           defaultValue: true,
//         },
//         {
//           name: 'enableCDN',
//           type: 'checkbox',
//           label: 'Use CDN for Assets',
//           defaultValue: true,
//         },
//         {
//           name: 'cdnUrl',
//           type: 'text',
//           label: 'CDN Base URL',
//           admin: {
//             description: 'Base URL for CDN',
//           },
//         },
//       ],
//     },
//     {
//       name: 'advancedSettings',
//       type: 'group',
//       label: 'Advanced Settings',
//       fields: [
//         {
//           name: 'customCSS',
//           type: 'textarea',
//           label: 'Custom CSS',
//           admin: {
//             description: 'Add custom CSS styles for this component',
//           },
//         },
//         {
//           name: 'customJS',
//           type: 'textarea',
//           label: 'Custom JavaScript',
//           admin: {
//             description: 'Add custom JavaScript code for this component',
//           },
//         },
//         {
//           name: 'dataAttributes',
//           type: 'array',
//           label: 'Custom Data Attributes',
//           admin: {
//             description: 'Add custom data attributes to sections',
//           },
//           fields: [
//             {
//               name: 'attribute',
//               type: 'text',
//               label: 'Attribute Name',
//               admin: {
//                 description: 'e.g., data-tracking-id',
//               },
//             },
//             {
//               name: 'value',
//               type: 'text',
//               label: 'Attribute Value',
//             },
//             {
//               name: 'targetSection',
//               type: 'select',
//               label: 'Apply To Section',
//               options: [
//                 { label: 'Hero Section', value: 'hero' },
//                 { label: 'Banner Image Section', value: 'bannerImage' },
//                 { label: 'Content Section', value: 'content' },
//                 { label: 'Counter Section', value: 'counter' },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'enableCaching',
//           type: 'checkbox',
//           label: 'Enable Component Caching',
//           defaultValue: true,
//         },
//         {
//           name: 'cacheTimeout',
//           type: 'text',
//           label: 'Cache Timeout (seconds)',
//         },
//       ],
//     },
//     {
//       name: 'integrationSettings',
//       type: 'group',
//       label: 'Integration Settings',
//       fields: [
//         {
//           name: 'googleAnalyticsId',
//           type: 'text',
//           label: 'Google Analytics ID',
//           admin: {
//             description: 'GA tracking ID for this component',
//           },
//         },
//         {
//           name: 'facebookPixelId',
//           type: 'text',
//           label: 'Facebook Pixel ID',
//         },
//         {
//           name: 'trackingEnabled',
//           type: 'checkbox',
//           label: 'Enable Tracking',
//           defaultValue: false,
//         },
//         {
//           name: 'trackingEvents',
//           type: 'array',
//           label: 'Tracking Events',
//           admin: {
//             description: 'Define custom tracking events',
//           },
//           fields: [
//             {
//               name: 'eventName',
//               type: 'text',
//               label: 'Event Name',
//               required: true,
//             },
//             {
//               name: 'trigger',
//               type: 'select',
//               label: 'Trigger',
//               options: [
//                 { label: 'Page Load', value: 'load' },
//                 { label: 'Link Click', value: 'click' },
//                 { label: 'Scroll to Section', value: 'scroll' },
//                 { label: 'Button Click', value: 'button-click' },
//               ],
//             },
//             {
//               name: 'targetElement',
//               type: 'text',
//               label: 'Target Element',
//               admin: {
//                 description: 'CSS selector for the target element',
//               },
//             },
//           ],
//         },
//         {
//           name: 'conversionTrackingEnabled',
//           type: 'checkbox',
//           label: 'Enable Conversion Tracking',
//           defaultValue: false,
//         },
//       ],
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to enable/disable this component',
//       },
//     },
//   ],
//   timestamps: true,
// }

import { CollectionConfig } from 'payload'

export const ProjectDetailsComponents: CollectionConfig = {
  slug: 'project-details-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'heroSection.title', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      required: true,
      defaultValue: 'Project Details Component',
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Used in URL: /projects/your-slug-here',
      },
      hooks: {
        beforeValidate: [
          ({ data, originalDoc }) => {
            const title = data?.heroSection?.titleBlock?.title
            if (!data.slug && title) {
              return title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return data.slug
          },
        ],
      },
    },
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'padding',
          type: 'group',
          label: 'Padding',
          fields: [
            {
              name: 'top',
              type: 'text',
              label: 'Padding Top',
            },
            {
              name: 'bottom',
              type: 'text',
              label: 'Padding Bottom',
            },
            {
              name: 'left',
              type: 'text',
              label: 'Padding Left',
            },
            {
              name: 'right',
              type: 'text',
              label: 'Padding Right',
            },
          ],
        },
        {
          name: 'titleBlock',
          type: 'group',
          label: 'Title Block',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Project Title',
              required: true,
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'titleFontSize',
              type: 'text',
              label: 'Title Font Size',
            },
            {
              name: 'titleFontWeight',
              type: 'text',
              label: 'Title Font Weight',
            },
            {
              name: 'titleLineHeight',
              type: 'text',
              label: 'Title Line Height',
            },
            {
              name: 'titleAnimation',
              type: 'text',
              label: 'Title Animation Attribute',
            },
            {
              name: 'showHorizontalLine',
              type: 'checkbox',
              label: 'Show Horizontal Line',
              defaultValue: true,
            },
            {
              name: 'lineClassName',
              type: 'text',
              label: 'Line CSS Classes',
            },
            {
              name: 'lineColor',
              type: 'text',
              label: 'Line Color',
            },
            {
              name: 'lineHeight',
              type: 'text',
              label: 'Line Height',
            },
            {
              name: 'lineAnimationWidth',
              type: 'text',
              label: 'Line Animation Width',
              admin: {
                description: 'Final width percentage (e.g., 100%)',
              },
            },
          ],
        },
        {
          name: 'descriptionBlock',
          type: 'group',
          label: 'Description Block',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Description Block',
              defaultValue: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
            {
              name: 'descriptionFontSize',
              type: 'text',
              label: 'Description Font Size',
            },
            {
              name: 'descriptionLineHeight',
              type: 'text',
              label: 'Description Line Height',
            },
            {
              name: 'animationTransform',
              type: 'text',
              label: 'Initial Animation Transform',
            },
            {
              name: 'animationOpacity',
              type: 'text',
              label: 'Initial Animation Opacity',
            },
            {
              name: 'animationBlur',
              type: 'text',
              label: 'Initial Animation Blur',
            },
          ],
        },
        {
          name: 'button',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Button',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Button Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Button Icon URL (Fallback)',
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Button Variant',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button CSS Classes',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Hover Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Button Border Radius',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Button Padding',
            },
          ],
        },
        {
          name: 'widgets',
          type: 'array',
          label: 'Info Widgets',
          admin: {
            description: 'Drag to reorder widgets (Client, Industry, Services, etc.)',
          },
          fields: [
            {
              name: 'type',
              type: 'text',
              label: 'Widget Type',
              required: true,
            },
            {
              name: 'name',
              type: 'text',
              label: 'Widget Name',
              required: true,
            },
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Widget',
              defaultValue: true,
            },
            {
              name: 'typeColor',
              type: 'text',
              label: 'Type Text Color',
            },
            {
              name: 'typeFontSize',
              type: 'text',
              label: 'Type Font Size',
            },
            {
              name: 'nameColor',
              type: 'text',
              label: 'Name Text Color',
            },
            {
              name: 'nameFontSize',
              type: 'text',
              label: 'Name Font Size',
            },
            {
              name: 'nameFontWeight',
              type: 'text',
              label: 'Name Font Weight',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Widget Background Color',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Widget Padding',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Widget Border Radius',
            },
          ],
        },
        {
          name: 'widgetsBlockStyles',
          type: 'group',
          label: 'Widgets Block Styling',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Widgets Block Background',
            },
            {
              name: 'gap',
              type: 'text',
              label: 'Gap Between Widgets',
            },
            {
              name: 'marginTop',
              type: 'text',
              label: 'Margin Top',
            },
            {
              name: 'animationTransform',
              type: 'text',
              label: 'Initial Animation Transform',
            },
            {
              name: 'animationOpacity',
              type: 'text',
              label: 'Initial Animation Opacity',
            },
            {
              name: 'animationBlur',
              type: 'text',
              label: 'Initial Animation Blur',
            },
          ],
        },
        {
          name: 'heroImage',
          type: 'group',
          label: 'Hero Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Hero Image',
              defaultValue: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Hero Image URL (Fallback)',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Image Alt Text',
            },
            {
              name: 'responsiveImages',
              type: 'group',
              label: 'Responsive Images',
              fields: [
                {
                  name: 'mobile',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Mobile Image (500px)',
                },
                {
                  name: 'mobileUrl',
                  type: 'text',
                  label: 'Mobile Image URL',
                },
              ],
            },
            {
              name: 'sizes',
              type: 'text',
              label: 'Responsive Sizes Attribute',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Image Border Radius',
            },
            {
              name: 'boxShadow',
              type: 'text',
              label: 'Image Box Shadow',
            },
            {
              name: 'animationOpacity',
              type: 'text',
              label: 'Initial Animation Opacity',
            },
          ],
        },
      ],
    },
    {
      name: 'bannerImageSection',
      type: 'group',
      label: 'Banner Image Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'padding',
          type: 'group',
          label: 'Padding',
          fields: [
            {
              name: 'top',
              type: 'text',
              label: 'Padding Top',
            },
            {
              name: 'bottom',
              type: 'text',
              label: 'Padding Bottom',
            },
          ],
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Banner Image',
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Banner Image URL (Fallback)',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Image Alt Text',
        },
        {
          name: 'responsiveImages',
          type: 'group',
          label: 'Responsive Images',
          fields: [
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image (500px)',
            },
            {
              name: 'mobileUrl',
              type: 'text',
              label: 'Mobile Image URL',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image (800px)',
            },
            {
              name: 'tabletUrl',
              type: 'text',
              label: 'Tablet Image URL',
            },
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image (1080px)',
            },
            {
              name: 'desktopUrl',
              type: 'text',
              label: 'Desktop Image URL',
            },
          ],
        },
        {
          name: 'sizes',
          type: 'text',
          label: 'Responsive Sizes Attribute',
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Image Border Radius',
        },
        {
          name: 'animationOpacity',
          type: 'text',
          label: 'Initial Animation Opacity',
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Max Width',
        },
      ],
    },
    {
      name: 'contentSection',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'padding',
          type: 'group',
          label: 'Padding',
          fields: [
            {
              name: 'top',
              type: 'text',
              label: 'Padding Top',
            },
            {
              name: 'bottom',
              type: 'text',
              label: 'Padding Bottom',
            },
            {
              name: 'left',
              type: 'text',
              label: 'Padding Left',
            },
            {
              name: 'right',
              type: 'text',
              label: 'Padding Right',
            },
          ],
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
        },
        {
          name: 'richTextWrapper',
          type: 'group',
          label: 'Rich Text Wrapper Styling',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'Wrapper CSS Classes',
            },
            {
              name: 'maxWidth',
              type: 'text',
              label: 'Max Width',
            },
            {
              name: 'animationTransform',
              type: 'text',
              label: 'Initial Animation Transform',
            },
            {
              name: 'animationOpacity',
              type: 'text',
              label: 'Initial Animation Opacity',
            },
            {
              name: 'animationBlur',
              type: 'text',
              label: 'Initial Animation Blur',
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Main Content',
          required: true,
        },
      ],
    },
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Banner Image Section', value: 'bannerImage' },
            { label: 'Content Section', value: 'content' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'bannerImage' }, { section: 'content' }],
    },
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width value (e.g., 1200px, 100%)',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: {
            description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: {
            description: 'Spacing between sections (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: {
            description: 'CSS font-family value',
          },
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
          admin: {
            description: 'Primary brand color',
          },
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
          admin: {
            description: 'Secondary brand color',
          },
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
          admin: {
            description: 'Accent color for highlights',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          admin: {
            description: 'Default text color for the page',
          },
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          admin: {
            description: 'Default color for links',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          admin: {
            description: 'Color for links on hover',
          },
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Default Border Radius',
          admin: {
            description: 'Default border radius for elements',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Default Box Shadow',
          admin: {
            description: 'Default box shadow for elements',
          },
        },
      ],
    },
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        {
          name: 'h1FontSize',
          type: 'text',
          label: 'H1 Font Size',
        },
        {
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
        },
        {
          name: 'h1MarginBottom',
          type: 'text',
          label: 'H1 Margin Bottom',
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
        },
        {
          name: 'h2LineHeight',
          type: 'text',
          label: 'H2 Line Height',
        },
        {
          name: 'h2MarginBottom',
          type: 'text',
          label: 'H2 Margin Bottom',
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
        },
        {
          name: 'h3Color',
          type: 'text',
          label: 'H3 Color',
        },
        {
          name: 'h3FontWeight',
          type: 'text',
          label: 'H3 Font Weight',
        },
        {
          name: 'h3LineHeight',
          type: 'text',
          label: 'H3 Line Height',
        },
        {
          name: 'h3MarginBottom',
          type: 'text',
          label: 'H3 Margin Bottom',
        },
        {
          name: 'h4FontSize',
          type: 'text',
          label: 'H4 Font Size',
        },
        {
          name: 'h4Color',
          type: 'text',
          label: 'H4 Color',
        },
        {
          name: 'h4FontWeight',
          type: 'text',
          label: 'H4 Font Weight',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
        },
        {
          name: 'listStyleType',
          type: 'text',
          label: 'List Style Type',
          admin: {
            description: 'CSS list-style-type (e.g., disc, circle, square)',
          },
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
        },
        {
          name: 'listItemSpacing',
          type: 'text',
          label: 'List Item Spacing',
        },
        {
          name: 'strongFontWeight',
          type: 'text',
          label: 'Strong/Bold Font Weight',
        },
      ],
    },
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'heroGridColumns',
          type: 'text',
          label: 'Hero Grid Columns',
          admin: {
            description: 'CSS grid columns for hero (e.g., 1fr 1fr)',
          },
        },
        {
          name: 'heroGridGap',
          type: 'text',
          label: 'Hero Grid Gap',
        },
        {
          name: 'contentMaxWidth',
          type: 'text',
          label: 'Content Max Width',
          admin: {
            description: 'Max width for content section',
          },
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
          admin: {
            description: 'Gap between rows (e.g., 20px, 1.5rem)',
          },
        },
        {
          name: 'imageObjectFit',
          type: 'select',
          label: 'Image Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'imagePosition',
          type: 'text',
          label: 'Image Position',
          admin: {
            description: 'CSS background-position value',
          },
        },
        {
          name: 'widgetsLayout',
          type: 'select',
          label: 'Widgets Layout',
          options: [
            { label: 'Flex Row', value: 'flex-row' },
            { label: 'Flex Column', value: 'flex-column' },
            { label: 'Grid', value: 'grid' },
          ],
          defaultValue: 'flex-row',
        },
      ],
    },
    {
      name: 'animationSettings',
      type: 'group',
      label: 'Animation Settings',
      fields: [
        {
          name: 'enableAnimations',
          type: 'checkbox',
          label: 'Enable Animations',
          defaultValue: true,
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          admin: {
            description: 'Duration for fade in animations (e.g., 1s, 2s)',
          },
        },
        {
          name: 'fadeInDelay',
          type: 'text',
          label: 'Fade In Delay',
          admin: {
            description: 'Delay before fade in starts (e.g., 0.2s)',
          },
        },
        {
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide animations',
          },
        },
        {
          name: 'slideInDistance',
          type: 'text',
          label: 'Slide In Distance',
          admin: {
            description: 'Distance elements slide from (e.g., 50px)',
          },
        },
        {
          name: 'hoverTransitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          admin: {
            description: 'Duration for hover effects',
          },
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: {
            description: 'CSS easing function',
          },
        },
        {
          name: 'enableScrollAnimations',
          type: 'checkbox',
          label: 'Enable Scroll Animations',
          admin: {
            description: 'Enable scroll-triggered animations',
          },
          defaultValue: true,
        },
        {
          name: 'scrollOffset',
          type: 'text',
          label: 'Scroll Animation Offset',
          admin: {
            description: 'Distance from viewport to trigger animation (px)',
          },
        },
        {
          name: 'lineAnimationDuration',
          type: 'text',
          label: 'Line Animation Duration',
          admin: {
            description: 'Duration for horizontal line animation',
          },
        },
        {
          name: 'lineAnimationDelay',
          type: 'text',
          label: 'Line Animation Delay',
        },
        {
          name: 'buttonHoverScale',
          type: 'text',
          label: 'Button Hover Scale',
          admin: {
            description: 'Scale factor on button hover (e.g., 1.05)',
          },
        },
      ],
    },
    {
      name: 'richTextStyles',
      type: 'group',
      label: 'Rich Text Content Styling',
      fields: [
        {
          name: 'figureMaxWidth',
          type: 'text',
          label: 'Figure Max Width',
        },
        {
          name: 'figureMargin',
          type: 'text',
          label: 'Figure Margin',
        },
        {
          name: 'imageMargin',
          type: 'text',
          label: 'Image Margin',
        },
        {
          name: 'imageBorderRadius',
          type: 'text',
          label: 'Image Border Radius',
        },
        {
          name: 'videoAspectRatio',
          type: 'text',
          label: 'Video Aspect Ratio',
          admin: {
            description: 'Padding-bottom percentage for video containers',
          },
        },
        {
          name: 'blockquoteStyle',
          type: 'group',
          label: 'Blockquote Styling',
          fields: [
            {
              name: 'borderLeft',
              type: 'text',
              label: 'Border Left',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
            },
            {
              name: 'fontStyle',
              type: 'text',
              label: 'Font Style',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
          ],
        },
        {
          name: 'codeBlockStyle',
          type: 'group',
          label: 'Code Block Styling',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
            },
            {
              name: 'fontFamily',
              type: 'text',
              label: 'Font Family',
            },
          ],
        },
      ],
    },
    {
      name: 'mobileSettings',
      type: 'group',
      label: 'Mobile Settings',
      fields: [
        {
          name: 'mobileBreakpoint',
          type: 'text',
          label: 'Mobile Breakpoint',
          admin: {
            description: 'Screen width for mobile (e.g., 767px)',
          },
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablet (e.g., 991px)',
          },
        },
        {
          name: 'mobileTitleFontSize',
          type: 'text',
          label: 'Mobile Title Font Size',
          admin: {
            description: 'Font size adjustment for titles on mobile',
          },
        },
        {
          name: 'mobileDescriptionFontSize',
          type: 'text',
          label: 'Mobile Description Font Size',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
          },
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile spacing',
          },
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          admin: {
            description: 'Automatically stack sections vertically on mobile devices',
          },
          defaultValue: true,
        },
        {
          name: 'mobileHeroLayout',
          type: 'select',
          label: 'Mobile Hero Layout',
          options: [
            { label: 'Stack (Image Below)', value: 'stack-below' },
            { label: 'Stack (Image Above)', value: 'stack-above' },
            { label: 'Single Column', value: 'single-column' },
          ],
          defaultValue: 'stack-below',
        },
        {
          name: 'mobileWidgetsLayout',
          type: 'select',
          label: 'Mobile Widgets Layout',
          options: [
            { label: 'Stack Vertically', value: 'stack' },
            { label: 'Grid 2 Columns', value: 'grid-2' },
            { label: 'Horizontal Scroll', value: 'scroll' },
          ],
          defaultValue: 'stack',
        },
        {
          name: 'mobileCounterLayout',
          type: 'select',
          label: 'Mobile Counter Layout',
          options: [
            { label: 'Stack Vertically', value: 'stack' },
            { label: '2x2 Grid', value: 'grid-2x2' },
          ],
          defaultValue: 'stack',
        },
        {
          name: 'mobileHideElements',
          type: 'array',
          label: 'Hide Elements on Mobile',
          admin: {
            description: 'List of element classes to hide on mobile',
          },
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'CSS Class Name',
            },
          ],
        },
      ],
    },
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'ogImageUrl',
          type: 'text',
          label: 'OG Image URL (Fallback)',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'robots',
          type: 'select',
          label: 'Robots Meta Tag',
          options: [
            { label: 'Index, Follow', value: 'index,follow' },
            { label: 'No Index, Follow', value: 'noindex,follow' },
            { label: 'Index, No Follow', value: 'index,nofollow' },
            { label: 'No Index, No Follow', value: 'noindex,nofollow' },
          ],
          defaultValue: 'index,follow',
        },
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Add schema.org structured data in JSON-LD format',
          },
        },
        {
          name: 'breadcrumbsEnabled',
          type: 'checkbox',
          label: 'Enable Breadcrumbs Schema',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'skipToContent',
          type: 'checkbox',
          label: 'Include Skip to Content Link',
          defaultValue: true,
        },
        {
          name: 'skipToContentTarget',
          type: 'text',
          label: 'Skip to Content Target ID',
        },
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          admin: {
            description: 'Color for focus outlines (accessibility)',
          },
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Visible Width',
        },
        {
          name: 'focusVisibleStyle',
          type: 'select',
          label: 'Focus Visible Style',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Dotted', value: 'dotted' },
          ],
          defaultValue: 'solid',
        },
        {
          name: 'contrastMode',
          type: 'select',
          label: 'Contrast Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'High Contrast', value: 'high' },
            { label: 'Very High Contrast', value: 'very-high' },
          ],
          defaultValue: 'normal',
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'imageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality',
          admin: {
            description: 'Compression quality (1-100)',
          },
        },
        {
          name: 'imageFormat',
          type: 'select',
          label: 'Preferred Image Format',
          options: [
            { label: 'Auto (WebP with fallback)', value: 'auto' },
            { label: 'WebP', value: 'webp' },
            { label: 'AVIF', value: 'avif' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'PNG', value: 'png' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths for responsive images',
          },
        },
        {
          name: 'preloadCriticalImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          admin: {
            description: 'Preload hero and above-the-fold images',
          },
          defaultValue: true,
        },
        {
          name: 'minifyCSS',
          type: 'checkbox',
          label: 'Minify CSS',
          defaultValue: true,
        },
        {
          name: 'minifyJS',
          type: 'checkbox',
          label: 'Minify JavaScript',
          defaultValue: true,
        },
        {
          name: 'enableCDN',
          type: 'checkbox',
          label: 'Use CDN for Assets',
          defaultValue: true,
        },
        {
          name: 'cdnUrl',
          type: 'text',
          label: 'CDN Base URL',
          admin: {
            description: 'Base URL for CDN',
          },
        },
      ],
    },
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add custom CSS styles for this component',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for this component',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to sections',
          },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: {
                description: 'e.g., data-tracking-id',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
            {
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Hero Section', value: 'hero' },
                { label: 'Banner Image Section', value: 'bannerImage' },
                { label: 'Content Section', value: 'content' },
                { label: 'Counter Section', value: 'counter' },
              ],
            },
          ],
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Component Caching',
          defaultValue: true,
        },
        {
          name: 'cacheTimeout',
          type: 'text',
          label: 'Cache Timeout (seconds)',
        },
      ],
    },
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'GA tracking ID for this component',
          },
        },
        {
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'trackingEnabled',
          type: 'checkbox',
          label: 'Enable Tracking',
          defaultValue: false,
        },
        {
          name: 'trackingEvents',
          type: 'array',
          label: 'Tracking Events',
          admin: {
            description: 'Define custom tracking events',
          },
          fields: [
            {
              name: 'eventName',
              type: 'text',
              label: 'Event Name',
              required: true,
            },
            {
              name: 'trigger',
              type: 'select',
              label: 'Trigger',
              options: [
                { label: 'Page Load', value: 'load' },
                { label: 'Link Click', value: 'click' },
                { label: 'Scroll to Section', value: 'scroll' },
                { label: 'Button Click', value: 'button-click' },
              ],
            },
            {
              name: 'targetElement',
              type: 'text',
              label: 'Target Element',
              admin: {
                description: 'CSS selector for the target element',
              },
            },
          ],
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
  ],
  timestamps: true,
}