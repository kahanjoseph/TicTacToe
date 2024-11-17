package livechart

import com.raquo.laminar.api.L.{*, given}

object ModalComponent {
  // Modal component
  def apply(modalTitle: String, hideModal: () => Unit, isModalVisible: Signal[Boolean]): HtmlElement = {
    div(
      cls.toggle("hidden") <-- isModalVisible.map(!_),
      cls := "relative z-10",
      div(
        cls := "fixed inset-0 bg-gray-500/75 transition-opacity",
        aria.hidden := true
      ),
      div(
        cls := "fixed inset-0 z-10 w-screen overflow-y-auto",
        div(
          cls := "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
          div(
            cls := "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
            div(
              div(
                cls := "mt-3 text-center sm:mt-5",
                h3(
                  cls := "text-base font-semibold text-gray-900",
                  idAttr := "modal-title",
                  modalTitle
                ),
              )
            ),
            div(
              cls := "mt-5 sm:mt-6",
              button(
                tpe := "button",
                cls := "inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                "Close",
                onClick --> (_ => hideModal())
              )
            )
          )
        )
      )
    )
  }
}