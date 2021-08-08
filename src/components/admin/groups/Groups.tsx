import React, {FC} from 'react';
import {SearchIcon} from '@heroicons/react/outline'
import GroupList from "./GroupList";

const Groups: FC = () => {
    return (
        <div className="p-4">
            <div className="w-2/3 space-y-8">
                <div className="relative text-gray-600">
                    <input
                        className="w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search for groups"/>
                    <button type="submit" className="absolute h-full right-0 mr-4">
                        <SearchIcon className="w-5 text-purple-600"/>
                    </button>
                </div>
                <GroupList/>
            </div>
        </div>
    );
};

export default Groups;