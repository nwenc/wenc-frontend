import { describe, it, expect, vi } from "vitest"
import { mount } from "../TestHelper"
import YiYan from "../../src/components/YiYan.vue"

describe("<YiYan/>", () => {
  const content = "会当凌绝顶，一览众山小。"
  const source = "《望岳》杜甫"

  it("renders properly", () => {
    const wrapper = mount(YiYan, {
      props: { content: content, source: source },
    })
    expect(wrapper.text()).toContain(content)
    expect(wrapper.text()).toContain(source)
  })

  it("click action should copy text to clipboard", () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => {},
      },
    })

    vi.spyOn(navigator.clipboard, "writeText")

    const wrapper = mount(YiYan, {
      props: { content: content, source: source },
    })
    wrapper.trigger("click")
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      content + " -- " + source
    )
  })
})
