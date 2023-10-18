'use client';
import { Dropdown } from 'flowbite-react';

const user = (
    <div className="flex items-center text-sm font-medium md:mr-0 rounded-full dark:text-white">
      <div className="flex items-start space-x-2">
        <img
          className="w-10 h-10 rounded-full"
          src="/images/prof.png"
          alt="profileImage"
        />
        <div className="font-light dark:text-white text-sm">
          <div>Shivansh Singh</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Software Engineer
          </div>
        </div>
      </div>
    </div>
)


export default function Profile() {
  return (
    <Dropdown label={user} inline placement="right">
      <Dropdown.Header>
        <span className="block text-sm">Shivansh Singh</span>
        <span className="block truncate text-sm font-medium">shivansh.singh20021@gmail.com</span>
      </Dropdown.Header>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
}





