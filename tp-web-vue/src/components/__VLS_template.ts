import TodoList from './TodoList.vue'
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './TheWelcome.vue'

function __VLS_template() {
  let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {}
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
  >
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
  let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {}
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[]
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    'TodoList',
    typeof __VLS_localComponents,
    'TodoList',
    'TodoList',
    'TodoList'
  >
  __VLS_intrinsicElements.div
  __VLS_intrinsicElements.div
  __VLS_intrinsicElements.div
  __VLS_intrinsicElements.div
  __VLS_intrinsicElements.div
  __VLS_intrinsicElements.div
  __VLS_intrinsicElements.p
  __VLS_intrinsicElements.p
  __VLS_intrinsicElements.button
  __VLS_intrinsicElements.button
  __VLS_components.TodoList
  // @ts-ignore
  ;[TodoList]
  {
    const __VLS_0 = __VLS_intrinsicElements['div']
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0)
    const __VLS_2 = __VLS_1({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_1))
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
          Record<string, unknown>
      ) => void
    )({ ...{} })
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
    if (__VLS_ctx.visible) {
      {
        const __VLS_5 = __VLS_intrinsicElements['p']
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5)
        const __VLS_7 = __VLS_6({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_6))
        ;(
          ({}) as (
            props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> &
              Record<string, unknown>
          ) => void
        )({ ...{} })
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
        let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
        __VLS_ctx.message
        __VLS_8.slots!.default
      }
      // @ts-ignore
      ;[visible, message]
    }
    {
      const __VLS_10 = __VLS_intrinsicElements['button']
      const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10)
      const __VLS_12 = __VLS_11(
        { ...{ onClick: {} as any } },
        ...__VLS_functionalComponentArgsRest(__VLS_11)
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> &
            Record<string, unknown>
        ) => void
      )({ ...{ onClick: {} as any } })
      const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
      let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
      let __VLS_15 = {
        click: __VLS_pickEvent(
          __VLS_14['click'],
          ({} as __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_12>).onClick
        )
      }
      __VLS_15 = {
        click: ($event) => {
          __VLS_ctx.foo()
          // @ts-ignore
          ;[foo]
        }
      }
      __VLS_13.slots!.default
    }
    {
      const __VLS_16 = __VLS_intrinsicElements['div']
      const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16)
      const __VLS_18 = __VLS_17({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_17))
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> &
            Record<string, unknown>
        ) => void
      )({ ...{} })
      const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!
      let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>
      __VLS_directiveFunction(__VLS_ctx.vBackground)(undefined)
      __VLS_19.slots!.default
    }
    {
      const __VLS_21 = __VLS_intrinsicElements['div']
      const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21)
      const __VLS_23 = __VLS_22({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_22))
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> &
            Record<string, unknown>
        ) => void
      )({ ...{} })
      const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!
      let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>
      __VLS_directiveFunction(__VLS_ctx.vBackground)(undefined)
      __VLS_24.slots!.default
    }
    {
      const __VLS_26 = (
        {} as 'TodoList' extends keyof typeof __VLS_ctx
          ? { TodoList: typeof __VLS_ctx.TodoList }
          : typeof __VLS_resolvedLocalAndGlobalComponents
      ).TodoList
      const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{} }))
      ;(({}) as { TodoList: typeof __VLS_26 }).TodoList
      const __VLS_28 = __VLS_27({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_27))
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> &
            Record<string, unknown>
        ) => void
      )({ ...{} })
      const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!
      let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>
    }
    __VLS_3.slots!.default
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  var __VLS_slots!: {}
  return __VLS_slots
}
