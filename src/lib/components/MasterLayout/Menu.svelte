<script lang="ts">
    
  import { Home, Gamepad, type Icon as IconType } from '@lucide/svelte'
    type MenuItem = {
        name: string;
        href: string;
        icon: typeof IconType;
    };
    const menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      href: '/master',
      icon: Home
    },
    {
      name: 'Games',
      href: '/master/games',
      icon: Gamepad
    },
  ];
 </script>

<div class="h-full overflow-y-auto">
    <ul class="menu w-full">
        <li class="menu-title">Admin panel</li>
        {#each menuItems as item (item.name)}
            {@const Icon = item.icon}
            <li>
                <a href={item.href}>
                   <Icon class="opacity-30"/>
                    {item.name}
			        <!-- <span class="badge justify-self-end">7</span> -->
                </a>
            </li>
        {/each}
    </ul>
</div>