<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <p
        class="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider pb-10"
      >
        From startups to corporate, I have experience accross the board
      </p>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            :src="pastCompanies.netlight.imgPath"
            :alt="pastCompanies.netlight.name"
            class="h-12"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            :src="pastCompanies.husleie.imgPath"
            :alt="pastCompanies.husleie.name"
            class="h-12"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            :src="pastCompanies.schibsted.imgPath"
            :alt="pastCompanies.schibsted.name"
            class="h-12"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            :src="pastCompanies.vg.imgPath"
            :alt="pastCompanies.vg.name"
            class="h-12"
          />
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            :src="pastCompanies.crux.imgPath"
            :alt="pastCompanies.crux.name"
            class="h-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NlLogo from '@/assets/images/companyLogos/netlightLogo.png'
import cruxLogo from '@/assets/images/companyLogos/cruxLogo.png'
import hlLogo from '@/assets/images/companyLogos/hlLogo.png'
import schibstedLogo from '@/assets/images/companyLogos/schibstedLogo.png'
import vgLogo from '@/assets/images/companyLogos/vgLogo.png'

export default {
  data() {
    return {
      pastCompanies: {
        netlight: {
          name: 'Netlight Consulting',
          imgPath: NlLogo
        },
        husleie: {
          name: 'Husleie.no',
          imgPath: hlLogo
        },
        schibsted: {
          name: 'Schibsted',
          imgPath: schibstedLogo
        },
        vg: {
          name: 'VG',
          imgPath: vgLogo
        },
        crux: {
          name: 'Crux Advisers',
          imgPath: cruxLogo
        }
      }
    }
  }
}
</script>

<style></style>
