package livechart

import com.raquo.laminar.api.L.{*, given}

object ToggleButton {
  def apply(toggle: Var[Boolean], textOn: String, textOff: String, colors: String = "bg-gray-600 text-white hover:bg-gray-900"): HtmlElement = {
    button(
      cls := s"w-40 px-6 py-9 mb-2 text-xl font-semibold shadow-sm $colors",
      onClick --> { _ =>
        val newToggleState = !toggle.now()
        toggle.set(newToggleState)
      },
      child.text <-- toggle.signal.map(isOn => if (isOn) textOn else textOff) // Dynamic text based on toggle state
    )
  }
}