export interface BindingEnhancer {

    eq(a: any, b: any): any;

    sum(a: any, b: any): any;

}

export function BindingEnhancerMixin<T extends typeof Contructor>(baseClass: T) {
    return class extends baseClass implements BindingEnhancer {


        eq(a: any, b: any) {
            return a == b;
        }

        sum(a: any, b: any) {
            return a + b;
        }

    }
}