import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true},
      ],
      //TypeScript provides two equivalent ways to define an array type: T[] and Array<T>. The two styles are functionally equivalent. Using the same style consistently across your codebase makes it easier for developers to read and understand array types.
      "@typescript-eslint/array-type": [
        "error",
        {
          "default": "generic"
        }
      ],
      // When using the delete operator with an array value, the array's length property is not affected, but the element at the specified index is removed and leaves an empty slot in the array. This is likely to lead to unexpected behavior. As mentioned in the MDN documentation, the recommended way to remove an element from an array is by using the Array#splice method.
      "@typescript-eslint/no-array-delete": "error",
      // This rule flags confusing ! assertions and suggests either removing them or wrapping the asserted expression in () parenthesis.
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      //This rule enforces that functions do have an explicit return type annotation.
      "@typescript-eslint/explicit-function-return-type": "error",
      //Enforcing naming conventions helps keep the codebase consistent, and reduces overhead when thinking about how to name a variable. Additionally, a well-designed style guide can help communicate intent, such as by enforcing all private properties begin with an _, and all global-level constants are written in UPPER_CASE.
      "@typescript-eslint/naming-convention": "error",
       //JavaScript will call toString() on an object when it is converted to a string, such as when + adding to a string or in ${} template literals. The default Object .toString() uses the format "[object Object]", which is often not what was intended. This rule reports on stringified values that aren't primitives and don't define a more useful .toString() method.
       "@typescript-eslint/no-base-to-string": "error",
       //Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within the same enum. Duplicate values can lead to bugs that are hard to track down.
       "@typescript-eslint/no-duplicate-enum-values": "error",
       //This rule also disallows explicitly listing undefined in a type union when a function parameter is marked as optional. Doing so is unnecessary. Please note that this check only applies to parameters, not properties. 
       "@typescript-eslint/no-duplicate-type-constituents": "error",
       //This rule aims to ensure that only meaningful interfaces are declared in the code.
       "@typescript-eslint/no-empty-interface": "error",
       //TypeScript's --noImplicitAny compiler option prevents an implied any, but doesn't prevent any from being explicitly used the way this rule does.
        "@typescript-eslint/no-explicit-any": "error",
        
    },
  },
)
