import { Control, SettingCategoryType } from './SettingBuilder.type'

const test: any = [
  {
    Name: 'TextControl',
    Title: { 'fa-ir': 'متن', 'en-us': 'Text' },
    Icon: 'sample-icon',
    SettingCategories: [
      {
        Name: { 'fa-ir': 'عمومی', 'en-us': 'basic' },
        SubCategories: [],
        Settings: {
          LABEL: {
            Default: { 'fa-ir': 'نوشته', 'en-us': 'Text' },
            Help: { 'fa-ir': 'توضیحات', 'en-us': 'description' },
            PlaceHolder: { 'fa-ir': '', 'en-us': '' },
            Title: { 'fa-ir': 'برچسب', 'en-us': 'Label' },
            Value: null,
            BaseType: 'TextSetting',
          },
          PLACEHOLDER: {
            Default: { 'fa-ir': '', 'en-us': '' },
            Help: { 'fa-ir': 'توضیحات', 'en-us': 'description' },
            PlaceHolder: { 'fa-ir': '', 'en-us': '' },
            Title: { 'fa-ir': 'متن نگهدارنده', 'en-us': 'Placeholder Text' },
            Value: null,
            BaseType: 'TextSetting',
          },
          HELP: {
            Default: { 'fa-ir': '', 'en-us': '' },
            Help: { 'fa-ir': 'توضیحات', 'en-us': 'description' },
            PlaceHolder: { 'fa-ir': '', 'en-us': '' },
            Title: { 'fa-ir': 'متن توضیحات', 'en-us': 'Help Text' },
            Value: null,
            BaseType: 'TextSetting',
          },
          FIELD_TYPE: {
            Source: {
              SINGLE_LINE: { 'fa-ir': 'تک خطی', 'en-us': 'single line' },
              MULTI_LINE: { 'fa-ir': 'چندخطی', 'en-us': 'multi lines' },
            },
            Title: { 'fa-ir': 'نوع', 'en-us': 'type' },
            Value: '',
            BaseType: 'RadioSetting',
          },
          REQUIRED: {
            ErrorMessage: {
              Default: null,
              Help: null,
              PlaceHolder: {
                'fa-ir': 'پیغام خطا را وارد کنید',
                'en-us': 'specify your error message',
              },
              Title: { 'fa-ir': 'پیغام خطا', 'en-us': 'error message' },
              Value: null,
              BaseType: 'TextSetting',
            },
            Title: { 'fa-ir': 'اجباری', 'en-us': 'required' },
            Value: { Enabled: false },
            BaseType: 'RequiredSetting',
          },
        },
      },
      {
        Name: { 'fa-ir': 'پیشرفته', 'en-us': 'advanced' },
        SubCategories: [
          {
            Name: { 'fa-ir': 'ساب1', 'en-us': 'sub1' },
            SubCategories: [],
            Settings: {
              DISPLAY_TYPES: {
                Source: {
                  CHECKBOX: { 'fa-ir': 'چک باکس', 'en-us': 'checkbox' },
                  SWITCH: { 'fa-ir': 'سوییج', 'en-us': 'switch' },
                },
                Title: { 'fa-ir': 'نوع', 'en-us': 'type' },
                Value: '',
                BaseType: 'RadioSetting',
              },
            },
          },
        ],
        Settings: {
          PREDEFINED_VALUE: {
            Default: { 'fa-ir': '', 'en-us': '' },
            Help: { 'fa-ir': 'توضیحات', 'en-us': 'description' },
            PlaceHolder: { 'fa-ir': '', 'en-us': '' },
            Title: { 'fa-ir': 'مقدار پیش فرض', 'en-us': 'predefined value' },
            Value: null,
            BaseType: 'TextSetting',
          },
          SEARCHABLE: {
            Source: {
              DISABLED: { 'fa-ir': 'غیر فعال', 'en-us': 'disable' },
              KEYWORD: { 'fa-ir': 'کلمه کلیدی', 'en-us': 'keyword' },
              TEXT: { 'fa-ir': 'نوشته', 'en-us': 'Text' },
            },
            Title: { 'fa-ir': 'قابل جستجو', 'en-us': 'searchable' },
            Value: '',
            BaseType: 'RadioSetting',
          },
          HIDE_CONTROL: {
            Title: { 'fa-ir': 'پنهان شده', 'en-us': 'hidden' },
            Value: false,
            BaseType: 'SwitchSetting',
          },
          SHOW_LABEL: {
            Title: { 'fa-ir': 'نمایش عنوان', 'en-us': 'show label' },
            Value: true,
            BaseType: 'SwitchSetting',
          },
        },
      },
    ],
  },
  {
    Name: 'SwitchControl',
    Title: { 'fa-ir': 'سوییچ', 'en-us': 'Switch' },
    Icon: 'sample-icon',
    SettingCategories: [
      {
        Name: { 'fa-ir': 'عمومی', 'en-us': 'basic' },
        SubCategories: [],
        Settings: {
          LABEL: {
            Default: { 'fa-ir': 'نوشته', 'en-us': 'Text' },
            Help: { 'fa-ir': 'توضیحات', 'en-us': 'description' },
            PlaceHolder: { 'fa-ir': '', 'en-us': '' },
            Title: { 'fa-ir': 'برچسب', 'en-us': 'Label' },
            Value: null,
            BaseType: 'TextSetting',
          },
          HELP: {
            Default: { 'fa-ir': '', 'en-us': '' },
            Help: { 'fa-ir': 'توضیحات', 'en-us': 'description' },
            PlaceHolder: { 'fa-ir': '', 'en-us': '' },
            Title: { 'fa-ir': 'متن توضیحات', 'en-us': 'Help Text' },
            Value: null,
            BaseType: 'TextSetting',
          },
          DISPLAY_TYPES: {
            Source: {
              CHECKBOX: { 'fa-ir': 'چک باکس', 'en-us': 'checkbox' },
              SWITCH: { 'fa-ir': 'سوییج', 'en-us': 'switch' },
            },
            Title: { 'fa-ir': 'نوع', 'en-us': 'type' },
            Value: '',
            BaseType: 'RadioSetting',
          },
          REQUIRED: {
            ErrorMessage: {
              Default: null,
              Help: null,
              PlaceHolder: {
                'fa-ir': 'پیغام خطا را وارد کنید',
                'en-us': 'specify your error message',
              },
              Title: { 'fa-ir': 'پیغام خطا', 'en-us': 'error message' },
              Value: null,
              BaseType: 'TextSetting',
            },
            Title: { 'fa-ir': 'اجباری', 'en-us': 'required' },
            Value: { Enabled: false },
            BaseType: 'RequiredSetting',
          },
        },
      },
      {
        Name: { 'fa-ir': 'پیشرفته', 'en-us': 'advanced' },
        SubCategories: [],
        Settings: {
          PREDEFINED_VALUE: {
            Source: {
              DISABLED: { 'fa-ir': 'غیر فعال', 'en-us': 'disabled' },
              ENABLED: { 'fa-ir': 'فعال', 'en-us': 'enabled' },
            },
            Title: { 'fa-ir': 'مقدار پیشفرض', 'en-us': 'searchable' },
            Value: '',
            BaseType: 'DropDownSetting',
          },
          SEARCHABLE: {
            Source: {
              DISABLED: { 'fa-ir': 'غیر فعال', 'en-us': 'disable' },
              KEYWORD: { 'fa-ir': 'کلمه کلیدی', 'en-us': 'keyword' },
            },
            Title: { 'fa-ir': 'قابل جستجو', 'en-us': 'searchable' },
            Value: '',
            BaseType: 'RadioSetting',
          },
        },
      },
    ],
  },
]

export const SettingBuilder = () => {
  const arr: { [key: string]: SettingCategoryType[] } = {}

  test.map((control: Control) => {
    return (arr[control.Name] = settingPreparing(control.SettingCategories))
  })

  return { arr }
}

const settingPreparing: (
  item: SettingCategoryType[]
) => SettingCategoryType[] = (item: SettingCategoryType[]) => {
  const settings: SettingCategoryType[] = []
  item.map((i: SettingCategoryType, index: number) => {
    settings.push({
      id: index,
      ...i,
    })
  })

  return settings
}
