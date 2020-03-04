<template>
  <section class="bg-gray-300 pb-24">
    <div class="bg-black min-h-screen">
      <div class="text-white text-center pt-64">
        <h1 class="text-6xl">
          Hello, I'm Kristian Elset Boe
        </h1>
        <p>
          Driven, experienced, independant consultant
        </p>
      </div>
    </div>
    <div
      class="container bg-white rounded mx-auto shadow-lg mb-24 -mt-64 py-32"
    >
      <section class="px-32">
        <div class="h-64">cool</div>
        <div class="h-64">cool</div>
        <div class="h-64">cool</div>
        <div class="h-64">cool</div>
        <div class="h-64">cool</div>
      </section>

      <section class="flex flex-col bg-gray-100 py-16">
        <div
          class="-ml-4 -mt-4 md:px-32 flex justify-between items-center flex-wrap sm:flex-no-wrap"
        >
          <div class="ml-4 mt-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Traditional CV
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam
              corrupti consectetur.
            </p>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <a href="/Kristian-Elset-Boe-Resume-CV.pdf" target="blank">
                <button
                  type="button"
                  class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                >
                  Download PDF
                </button>
              </a>
            </span>
          </div>
        </div>
        <div class="self-center my-12 shadow-lg">
          <CVPdf />
        </div>

        <span class="inline-flex rounded-md shadow-sm self-center">
          <a href="/Kristian-Elset-Boe-Resume-CV.pdf" target="blank">
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
            >
              Download PDF
            </button>
          </a>
        </span>
      </section>
    </div>
  </section>
</template>

<script>
import CVPdf from '@/components/CVPdf'

export default {
  components: {
    CVPdf
  }
}
</script>

<style></style>
