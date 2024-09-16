import * as React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Text } from '@/components/ui/text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';

export function CountryDropDown() {
  const contentInsets = useSafeAreaInsets();

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TouchableOpacity className='p-15 bg-white text-center rounded-full'>
            <Text className='text-center'>Choose Country</Text>
          </TouchableOpacity>
          
        </DropdownMenuTrigger>
        <DropdownMenuContent insets={contentInsets} className='w-64 native:w-72 text-white'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Text>Team</Text>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Text>Invite users</Text>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <Animated.View entering={FadeIn.duration(200)}>
                  <DropdownMenuItem>
                    <Text>Email</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text>Message</Text>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Text>More...</Text>
                  </DropdownMenuItem>
                </Animated.View>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Text>New Team</Text>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Text>GitHub</Text>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Text>Support</Text>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Text>API</Text>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Text>Log out</Text>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}